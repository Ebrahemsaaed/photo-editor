// hold elemnents
let saturate = document.getElementById("saturate");;
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hue_rotate = document.getElementById("hue-rotate");
let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");
let reset = document.querySelector("span");
let imgbox = document.querySelector(".img-box");
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d')


function resetValue() {
    img.style.filter = "none";
    saturate.value = "100";
    contrast.value = "100";
    brightness.value = "100";
    sepia.value = "100";
    grayscale.value = "0";
    blur.value = "0";
    hue_rotate.value = "0"
}


// onload function
window.onload = () => {
    reset.style.display = "none";
    download.style.display = "none";
    imgbox.style.display = "none";

}
// upload function
upload.onchange = () => {
    resetValue();
    reset.style.display = "block";
    download.style.display = "block";
    imgbox.style.display = "block";
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        img.src = file.result;
    }
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display = "none"
    }



}
// filters function
let filters = document.querySelectorAll("ul li input");
filters.forEach(filter => {
    filter.addEventListener('input', () => {
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hue_rotate.value}deg)
        `
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    })
})

// function download


download.onclick = () => {
    download.href = canvas.toDataURL('image/jpeg');
}