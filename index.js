const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event){
    jump();
});
function jump () {
   if(dino.classList != "jump"){
        dino.classList.add("jump")
   }
   setTimeout( funtion() (
      dino.classList.remove("jump")
), 300)
}
 



let isAlive = setInterval( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getProgertWalue("top"))
    let cactusleft = parseInt(window.getComputedStyle(cactus).getProgertWalue("left"))

    if (cactusleft < 50 && cactusleft > 0 && dinoTop >= 140) {
        alert("Game Over!!")
    }
}, 10);