let slide = document.querySelectorAll(".reviewcard");
let login = document.getElementById("login");
let loginbtn = document.getElementById("loginbtn");
 

let count = 0;



slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
    })
    
 function myfun(){
    slide.forEach(function(curval){
     curval.style.transform=`translateX(-${count * 100}%)`
    })
}
    setInterval(function(){
        count++;
if (count == slide.length){
    count=0;
}
myfun();
},2000)
  

login.addEventListener("click", function(){
    document.querySelector(".loginpage").classList.toggle("active");
   
   })
   loginbtn.addEventListener("click", function(){
    let na = document.getElementById("na");
  let em = document.getElementById("em");
  let pass = document.getElementById("pass");
 if( na.value == "" && em.value == "" && pass.value == ""){
    alert("please Enter Detail")
}else{
 alert(" Thanks You Logged In" )
}

   })