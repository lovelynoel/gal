const $container=$('.gallery'); // 이미지들을 감싸는 갤러리
const $loadMoreBtn=$('.load-more'); //더보기 버튼
let $addItemCount=8;  //item 8개 보이기 클릭할때마다 나오는 갯수
let $added=0; //처음보이는 것 리스트 항목 모두 로드하면 버튼이 사라지게 할 용도
let $allData=[];

$.getJSON('./data/content.json', function(data){

});
function initGallery(data){
    $allData=Data;
    console.log($allData);
}