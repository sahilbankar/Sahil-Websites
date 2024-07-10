let trendfood = document.querySelectorAll(".trendfood");
let foodcard = document.querySelectorAll(".foodcard");
let sahilcard = document.querySelectorAll(".sahilcard");
let count = 0;
console.log(trendfood);

trendfood.forEach((imgs, index)=>{
    imgs.style.left=`${index*100}%`;
    })
    
 function myfun(){
    trendfood.forEach((curImg)=>{
     curImg.style.transform=`translateX(-${count * 100}%)`
    })
}
    setInterval(()=>{
        count++;
if (count == trendfood.length){
    count=0
}
myfun();
},4000)
 //food detail
foodcard.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);


        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
          <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
<h2>Food Details</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo, sapiente culpa eos exercitationem doloremque, iure optio ex deserunt voillo?22</p>

        `
        document.querySelector("body").appendChild(div)
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove();
        })

})

})
    //food detail
sahilcard.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);


        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
          <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
<h2>Food Details</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo, sapiente culpa eos exercitationem doloremque, iure optio ex deserunt voillo?22</p>

        `
        document.querySelector("body").appendChild(div)
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove();
        })

})

})