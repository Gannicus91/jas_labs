var turn = 0;
var canContinue = true;
var signs = ["&#9587", "&#8413"];
var state = {"00":0, "01":0, "02":0, "10":0, "11":0, "12":0, "20":0, "21":0, "22":0};
function setTicTac(elem){
	if(elem.firstChild.innerHTML=="" && canContinue){
		elem.firstChild.innerHTML = signs[turn%2];
		let id = elem.id;
		if(turn%2){
			state[id]++;
		}else{
			state[id]--;
		}
		turn++;
		endgame();
	}
}
function endgame(){
	let c1 = Math.abs(state["00"]+state["01"]+state["02"])==3;
	let c2 = Math.abs(state["10"]+state["11"]+state["12"])==3;
	let c3 = Math.abs(state["20"]+state["21"]+state["22"])==3;
	let c4 = Math.abs(state["00"]+state["10"]+state["20"])==3;
	let c5 = Math.abs(state["01"]+state["11"]+state["21"])==3;
	let c6 = Math.abs(state["02"]+state["12"]+state["22"])==3;
	let c7 = Math.abs(state["00"]+state["11"]+state["22"])==3;
	let c8 = Math.abs(state["02"]+state["11"]+state["20"])==3;
	if(c1 || c2 || c3 || c4 || c5 || c6 || c7 || c8){
		canContinue = false;
		alert("The end!");
	}
}