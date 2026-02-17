const OptionsButtons = document.querySelectorAll("#Options button");
const controlArea = document.getElementById("controlArea");

function controlAreaCardMaker(id){
     const clickTime = new Date();
     const formatted =
        clickTime.getDate()+"/"+
        clickTime.getMonth()+"/"+
        clickTime.getFullYear()+", "+
        clickTime.getHours() + ":" +
        (clickTime.getMinutes() < 10
        ? "0" + clickTime.getMinutes() : clickTime.getMinutes());

    let Card = document.createElement("div");
    Card.classList.add("Card");
    Card.textContent = document.getElementById(id).textContent+" "+formatted;

    controlArea.prepend(Card)
}
function jsonAreaDataMaker(id){
    const clickTime = new Date();
    const formatted =
        clickTime.getDate()+"/"+
        clickTime.getMonth()+"/"+
        clickTime.getFullYear()+", "+
        clickTime.getHours() + ":" +
        clickTime.getMinutes();
    
}

OptionsButtons.forEach((btn, index) => {
    btn.id = index;   // assigns 0, 1, 2...
    btn.addEventListener("click", function (e) {
        controlAreaCardMaker(btn.id)
    });
});