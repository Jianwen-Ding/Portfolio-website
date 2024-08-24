idMap = new Map();
downSpeed = 10;
upSpeed = 10;   

//This class stores all of the information of idMaps
class DragInfo{
    constructor(dragIdSet, iconIdSet, downLocSet, upLocSet, dragUpIconSet, dragDownIconSet){
        this.state = "inactive";
        this.dragId = dragIdSet;
        this.iconId = iconIdSet;
        this.downLoc = downLocSet;
        this.upLoc = upLocSet;
        this.dragUpIcon = dragUpIconSet;
        this.dragDownIcon = dragDownIconSet;
        this.icon = document.getElementById(this.iconId);
        this.dragDownElement = document.getElementById(this.dragId);
    }
}

//This function initializes a dragdown element
function dragInit(dragId, iconId, downLoc, upLoc, dragUpIcon, dragDownIcon){
    idMap.set(dragId, new DragInfo(dragId, iconId, downLoc, upLoc, dragUpIcon, dragDownIcon))
}

//This function drags down a html
function dragDown(dragId){
    var info = idMap.get(dragId);
    // Drags down element and puts it into view
    if(info.state == "inactive"){
        info.state = "draggedDown";
        info.icon.src = info.dragUpIcon;
    }
    // Drags up element and hides it
    else if(info.state == "active"){
        info.state = "draggedDown";
        info.icon.src = info.dragUpIcon;
    }
}
function updateId(value, key){
    if(value.state == "draggedDown"){
        if(Math.abs(parseFloat(value.dragDownElement.style.top) - value.downLoc) < value.downSpeed){
            value.state = "active";
        }
        else{
            value.dragDownElement.style.top = parseFloat(value.dragDownElement.style.top) - downSpeed;
        }
    }
    else if(value.state == "draggedUp"){
        if(Math.abs(parseFloat(value.dragDownElement.style.top) - value.upLoc) < value.upSpeed){
            value.state = "inactive";
        }
        else{
            value.dragDownElement.style.top = parseFloat(value.dragDownElement.style.top) + upSpeed;
        }
    }
    console.log(value.dragDownElement.style);
}
function update(){
    idMap.forEach((values,keys) => updateId(values,keys));
}
window.onload = function()
{ 
    // Actually setting up elements 
    dragInit("projectsDrag", "projectDragButton", 0, 5, "Resources/UpIcon.png", "Resources/DownIcon.png");
    console.log(idMap);
    setInterval(update,.10);
}