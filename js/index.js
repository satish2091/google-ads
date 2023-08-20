let main=document.querySelector('.container1')
console.log(main)

main.addEventListener("click",(event)=>{
    const target = event.target;
    if (target.classList.contains('icon') && (target.id == 'wrong' || target.closest == '#wrong')) {
        let frame=`<div style="margin: 30px;">
        <h3  id= "ads">ADS BY GOOGLE</h3>
        </div>
        <div class="button-container2">
            <button style="background-color: dodgerblue" onclick=window.location.href="index.html">stop seeing this add</button>
            <button onclick=window.location.href=("https://adssettings.google.com/whythisad")>why this add?</button>
        </div>
        <i class="icon2 fa-solid fa-arrow-left" onclick="back()"></i>`;
        main.innerHTML=frame;
    }
    if(target.classList.contains('icon')&& (target.id=='info' || target.closest =='#info')){
        window.open("https://adssettings.google.com/whythisad")
    }

})

main.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains('icon2')) {
        back();
    }
});

function back(){
    let backf=`<div class="icons">
    <i id="info"  class="icon fa-solid fa-circle-info" title="ads by google" ></i>
    <i id="wrong"  class="icon fa-solid fa-xmark"></i>
      </div>`; 
    main.innerHTML=backf;
}

let change=document.querySelector('.button-container')
change.addEventListener("click",()=>{
    let c=` <div  id="index3d" class="container1" >
    <div>
      <h3 id="index3h">we will not repeat this ad</h3>
    </div>  
  </div>`
  change.innerHTML=c;
})

function changecontent(){
    let content=document.getElementById('index3h')
    content.innerHTML="ad closed by google"
}
setTimeout(changecontent,5000)
