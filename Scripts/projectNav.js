elemInfoList = new Array(); 
transitionTime = 0.5;
mainTagTaken = "projectInfo";
buttonTag = "INFOBUTTON";
elementTag = "INFOELEM";
// This class stores all of the information in a project 
class SectionInfo{
    constructor(mainElemSet, conButtonSet, starting){
        this.elem = mainElemSet;
        this.conButton = conButtonSet;

        if(starting){
            this.elem.classList.add("startSlide");
            this.conButton.classList.add("activeButton");
        }
        else{
            this.conButton.classList.add("inactiveButton");
        }
    }
    slideLeftIn(){
        this.conButton.classList.remove("inactiveButton");
        this.elem.classList.remove("rightOutSlide");
        this.elem.classList.remove("leftOutSlide");
        this.elem.classList.add("leftInSlide");
        this.conButton.classList.add("activeButton");
    }
    slideRightIn(){
        this.conButton.classList.remove("inactiveButton");
        this.elem.classList.remove("rightOutSlide");
        this.elem.classList.remove("leftOutSlide");
        this.elem.classList.add("rightInSlide");
        this.conButton.classList.add("activeButton");
    }
    slideLeftOut(){
        this.conButton.classList.remove("activeButton");
        this.elem.classList.remove("startSlide");
        this.elem.classList.remove("rightInSlide");
        this.elem.classList.remove("leftInSlide");
        this.elem.classList.add("leftOutSlide");
        this.conButton.classList.add("inactiveButton");
    }
    slideRightOut(){
        this.conButton.classList.remove("activeButton");
        this.elem.classList.remove("startSlide");
        this.elem.classList.remove("rightInSlide");
        this.elem.classList.remove("leftInSlide");
        this.elem.classList.add("rightOutSlide");
        this.conButton.classList.add("inactiveButton");
    }
}
class ProjectInfo{
    constructor(mainElemSet){
        this.currentPage = 0;
        this.tranLeftTime = transitionTime;
        this.mainElem = mainElemSet;
        var mainElems = new Array();
        var conButtons = new Array();
        var childList = this.mainElem.children;
        this.sectionInfos = new Array();
        for(let i = 0; i < childList.length; i++){
            if(childList[i].tagName == buttonTag){
                conButtons = childList[i].children;
            }
            else if(childList[i].tagName == elementTag){
                mainElems = childList[i].children;
            }
        }
        this.sectionInfos.push(new SectionInfo(mainElems[0], conButtons[0], true));
        for(let i = 1; i < mainElems.length; i++){
            this.sectionInfos.push(new SectionInfo(mainElems[i], conButtons[i], false));
        }
    }
    moveToSlide(nextSlide){
        if(this.tranLeftTime >= transitionTime&& this.currentPage != nextSlide){
            if(this.currentPage > nextSlide){
                this.sectionInfos[this.currentPage].slideRightOut();
                this.sectionInfos[nextSlide].slideLeftIn();
            }
            else if(this.currentPage < nextSlide){
                this.sectionInfos[this.currentPage].slideLeftOut();
                this.sectionInfos[nextSlide].slideRightIn();
            }
            this.currentPage = nextSlide;
            this.tranLeftTime = 0;
        }
    }
}

function slideTo(projectIndex, elemIndex){
    elemInfoList[projectIndex].moveToSlide(elemIndex);
}

window.addEventListener("load",function()
{ 
    // Actually setting up elements 
    var elemList = document.body.getElementsByTagName(mainTagTaken);
    for(let i = 0; i < elemList.length; i++){
        elemInfoList.push(new ProjectInfo(elemList[i]));
    }
    setInterval(function(){
        for(let i = 0; i < elemInfoList.length; i++){
            if(elemInfoList[i].tranLeftTime < transitionTime){
                elemInfoList[i].tranLeftTime = elemInfoList[i].tranLeftTime + 0.1;
                console.log("wow");
            }
        }
    },100);
});