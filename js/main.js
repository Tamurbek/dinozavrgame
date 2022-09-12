const dino=document.getElementById("dino");
const cactus=document.getElementById("cactus");
function jump(){
    if(dispatchEvent.classList!="jump"){
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}
let checkAlive=setInterval(function(){
    let dinoTop=parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
    );
    let cactusleft=parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );
    if(cactusleft>0 && cactusleft <70 && dinoTop>=143){
        dino.style.animationPlayState="paused";
        cactus.style.animationPlayState="paused";
        alert("Siz yutqazdingiz!!");
        window.location.reload();
    }
},10);
document.addEventListener("keydown",function(event){
    jump();
});