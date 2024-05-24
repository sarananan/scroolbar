let gallery=document.querySelector(".gallery")
let leftbtn=document.querySelector('.lbtn')
let rightbtn=document.querySelector('.rbtn')
gallery.addEventListener("wheel",(evt)=>{
    evt.preventDefault()
    gallery.scrollLeft+=deltaY;
})
leftbtn.addEventListener("click",()=>{
    gallery.style.scrollBehavior="smooth";
    gallery.scrollLeft-=900;
})
rightbtn.addEventListener("click",()=>{
    gallery.scrollLeft+=900;
    gallery.style.scrollBehavior="smooth";
})

