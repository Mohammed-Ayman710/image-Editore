let img=document.getElementById("img");
let upload=document.getElementById("upload");
let saturate=document.getElementById("saturate");
let contrast=document.getElementById("contrast");
let brightness=document.getElementById("brightness");
let sepial=document.getElementById("sepial");
let grayscale=document.getElementById("grayscale");
let blur=document.getElementById("blur");
let hue_rotate=document.getElementById("hue-rotate");
let download=document.getElementById("download");
let reset=document.querySelector("span");
let img_box=document.querySelector(".img-box");
console.log(img)


window.onload=function(){
    download.style.display='none';
    reset.style.display='none';
    img_box.style.display='none';
}

upload.onchange=function(){
    download.style.display='block';
    reset.style.display='block';
    img_box.style.display='block';

    let file=new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        img.src=file.result;
    }

}

let filters=document.querySelectorAll("ul li input");
filters.forEach(filter=>{
    filter.addEventListener('input',function(){
        img.style.filter=`
        sepial(${sepial.value}%)


        `
    })
})
console.log(hue_rotate.value)
console.log(saturate.value)
// saturate(${saturate.value}%)
// blur(${blur.value}px)
// contrast(${contrast.value}%)
// brightness(${brightness.value}%)
// grayscale(${grayscale.value})
// //     sepial(${sepial.value}%)
// //     
// //     hue_rotate(${hue_rotate.value}deg)