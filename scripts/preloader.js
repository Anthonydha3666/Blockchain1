window.onload = function(){
 
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    
}
myBtn = document.querySelector(".btnsrcoll")
window.onscroll = function() {
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 500) {
        myBtn.style.display = "block";
      
    } else {
        myBtn.style.display = "none";
    }
   };
     

 
  
    
 


