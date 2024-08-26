
//This class stores all of the information of idMaps
class DragInfo{
    constructor(dragIdSet, dragTimeSet, iconIdSet, dragUpIconSet, dragDownIconSet){
        this.state = "inactive";
        this.dragId = dragIdSet;
        this.iconId = iconIdSet;
        this.dragUpIcon = dragUpIconSet;
        this.dragDownIcon = dragDownIconSet;
        this.icon = document.getElementById(this.iconId);
        this.dragDownElement = document.getElementById(this.dragId);
        this.dragEnd = dragTimeSet;
        this.timeInto =  dragTimeSet;
    }
}

//This function initializes a dragdown element
function dragInit(dragId, dragTime, iconId, dragUpIcon, dragDownIcon){
    idMap.set(dragId, new DragInfo(dragId, dragTime, iconId, dragUpIcon, dragDownIcon))
}

//This function drags down a html
function dragDown(dragId){
    var info = idMap.get(dragId);
    // Drags down element and puts it into view
    if(info.state == "inactive" && info.timeInto >= info.dragEnd){
        info.dragDownElement.classList.remove("draggedUp");
        info.state = "active";
        info.icon.src = info.dragUpIcon;
        info.dragDownElement.classList.add("draggedDown");
        info.timeInto = 0;
    }
    // Drags up element and hides it
    else if(info.state == "active" && info.timeInto >= info.dragEnd){
        info.dragDownElement.classList.remove("draggedDown");
        info.state = "inactive";
        info.icon.src = info.dragDownIcon;
        info.dragDownElement.classList.add("draggedUp");
        info.timeInto = 0;
    }
}
window.onload = function()
{ 
    idMap = new Map();
    // Actually setting up elements 
    dragInit("projectsDrag", 0.5, "projectDragButton", "Resources/UpIcon.png", "Resources/DownIcon.png");
    dragInit("jamsDrag", 0.5, "jamDragButton", "Resources/UpIcon.png", "Resources/DownIcon.png");

    setInterval(function(){
        idMap.forEach((values,keys) =>
        {
            if(values.timeInto <= values.dragEnd){
                values.timeInto = values.timeInto + 0.1;
            }
        });
    },100);
}