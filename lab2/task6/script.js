var timerId = setTimeout(function tick() {
    let d = new Date();
	document.getElementById("24").innerHTML = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    timerId = setTimeout(tick, 1000);
}, 1000);