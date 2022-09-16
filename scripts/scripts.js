clock = document.querySelector(".time");
amPm = document.querySelector(".P-A");

setInterval(function() {
   setClock();
}, 1000)





function setClock() {
    let date = new Date();
    let noonOrMorn = date.getHours() > 12 ? "PM" : "AM";
    time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).replace(/AM|PM/,'') ;
    clock.textContent = time;
    amPm.textContent = noonOrMorn;
}


