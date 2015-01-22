$(document).ready(function(){

  $('.add-song').on('click',function(e){
    console.log($(this).closest('div[class="track"]'));
  });

});