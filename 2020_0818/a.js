var a = $('.a')[0].innerHTML;
console.log(a);
 var before = "ja";
 var after = "en";

 
 $("#translation").on('click', function(){ 
   $.ajax({
     url: 'https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec?text=Hello&source=en&target=ja',
    //  url:'https://script.google.com/macros/s/AKfycbyeVi6ZMwdm691_eDPVdDtbIRyAP-eI8TAw27Zq/exec' +'?text='+ a + '&source=' + before + '&target=' + after,
     type: 'post',
     dataType:'jsonp'
    })
   .done(function(response){
    console.log(response);
   });
   
 })
