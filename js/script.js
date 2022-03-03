$(function(){
    const $container=$('.gallery');//이미지들을 감싸는 갤러리
    const $loadMoreBtn=$('.load-more');//더보기 버튼
    let $addItemCount=8; //클릭할떄마다 나오는 갯수
    let $added=0;//처음보이는 것 리스트 항목 모두 로드하면 버튼
    let $allData=[];
    
    $.getJSON("./data/content.json", function(data){
        intGallery(data);
    });
    function intGallery(data){
        $allData=data;
        addItem();
       //console.log($allData);
       $loadMoreBtn.click(function(){
            addItem();
       });
    }
    function addItem(){
        let elements=[];
        let sliceDate;
        sliceDate=$allData.slice($added, $added += $addItemCount);
        $.each(sliceDate, function(idx, item){
            let itemHTML=
            '<li class="gallery-item">'+
                '<a href="'+item.images.large+'">'+
                    '<figure>'+
                        '<img src="'+item.images.thumb+'" alt="'+item.title+'">'+
                        '<figcaption>'+item.title+'</figcaption>'+
                    '</figure>'+
                '</a>'+
            '</li>';
            elements.push($(itemHTML).get(0));
        });
        $container.append(elements);
        $added += sliceDate.length;

        if($added < $allData.length){
            $loadMoreBtn.show()
        }else{
            $loadMoreBtn.hide()
        }
        $container.imagesLoaded( function() {
            // images have loaded
          });
    }
});
