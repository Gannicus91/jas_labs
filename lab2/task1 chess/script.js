var visible = false;
var isChoosen = null;
var x = 4, y = 4;
function setField(chessman){
    var elem = document.getElementById("start");

    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    /**
    var img = document.createElement("IMG");
    img.src = chessman.src;
    img.width = chessman.width;
    img.height = chessman.height;
    img.addEventListener("click", function(){choose(this);});
    **/
    elem.appendChild(chessman.cloneNode(true));
    elem.firstChild.onclick = function(){choose(this);};
}

function getPossibleTurns(name){

}

function choose(chessman){
    if(!isChoosen){
        isChoosen = chessman;
    }else{
        isChoosen = null;
    }
    
}

function go(cell){
    if(isChoosen){
        cell.appendChild(isChoosen);
    }
}