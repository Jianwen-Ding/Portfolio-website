idMap = new Map(); 
transitionTime = 0.5;
mainTagTaken = "projectInfo";
buttonTag = "button";
elementTag = "infoElem";
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
    constructor(mainElemID){
        this.currentPage = 0;
        this.tranLeftTime = transitionTime;
        this.mainElem = document.getElementById(mainElemID);
        var mainElems = new Array();
        var conButtons = new Array();
        var childList = this.mainElem.children;
        for(let i = 0; i < childList.length; i++){
            if(childList[i].tagName == buttonTag){
                conButtons.push(childList[i]);
            }
            else if(childList[i].tagName == elementTag){
                mainElems.push(childList[i]);
            }
        }
        this.sectionInfos.push(new SectionInfo(elemIDList[0], false));
        for(let i = 1; i < elemIDList.length; i++){
            this.sectionInfos.push(new SectionInfo(elemIDList[i], false));
        }
        
    }
    moveToSlide(nextSlide){
        if(this.tranLeftTime >= transitionTime&& this.currentPage != nextSlide){
            if(this.currentPage < nextSlide){
                this.sectionInfos[this.currentPage].slideRightOur();
                this.sectionInfos[nextSlide].slideLeftIn();
            }
            else if(this.currentPage > nextSlide){
                this.sectionInfos[this.currentPage].slideLeftOut();
                this.sectionInfos[nextSlide].slideRightIn();
            }
            this.currentPage = nextSlide;
            this.tranLeftTime = 0;
        }
    }
}
window.onload = function()
{ 
    // Actually setting up elements 

    setInterval(function(){
        idMap.forEach((values,keys) =>
        {
            if(values.tranLeftTime <= transitionTime){
                values.tranLeftTime = values.tranLeftTime + 0.1;
            }
        });
    },100);
}