clock = document.querySelector(".time");


setInterval(function() {
   setClock();
}, 1000)





function setClock() {
    let date = new Date();
    time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).replace(/AM|PM/,'') ;
    clock.textContent = time;
}


