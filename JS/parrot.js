$(document).ready(function(){

    var modal = document.getElementById('id01');

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $('.imgBoxContent').on('click',function showBlock(){
        
        //取得鳥圖片路徑
        var birdImg = $(this).find("img").attr('src'); 

        //取得小鳥的標題,小標,敘述
        var birdTittle = $(this).children(".contentDetails").children('.content-title').text();
        var birdTittleS = $(this).children(".contentDetails").children('.content-text').text();
        var birdTittleDesc = $(this).children(".contentDetails").children('.textcontDes').text();
        
        //更換圖片路徑
        $('#id01').find("img").attr('src',birdImg); 
        
        //更換小鳥的標題,小標,敘述
        $('#id01').find(".textcontainerT").text(birdTittle);
        $('#id01').find(".textcontainerS").text(birdTittleS);
        $('#id01').find(".contDes").text(birdTittleDesc);
        
        //顯示框框
        document.getElementById('id01').style.display='block'

    })

})