const form  = document.querySelector("form");
const videowrap = document.querySelector(".videowrap");
const video = document.querySelector("video");
const overlay = document.querySelector(".overlay1");


form.addEventListener("submit", e => {
    const input  = document.querySelector("input");
    e.preventDefault();
    if(input.value.trim() !== "DEEZ") {
        alert("Incorrect password");
        return false;
    }
    else{
        overlay.classList.replace("overlay1", "overlay");
        videowrap.style.top = '0';
        video.play();
    }
});


video.addEventListener("ended", ()=> {
    const tweet = `I just registered for $DEEZ nuts @deeznutsethcoin %0A%0A`;
    window.open(`https://twitter.com/intent/tweet?text=${tweet}&url=deeznuts.xyz`, '_blank');
    window.location.reload()
});
