function AcademicMenu(){
    /* for both grabbing the academic dropdown info*/
    document.getElementById("AcademicmyDropdown").classList.toggle("show");
}
function IBMenu(){
    /* for both grabbing the IB dropdown info*/
    document.getElementById("IBmyDropdown").classList.toggle("show");
}
/*to close the window afterwards*/
window.onclick = function(event){
    if(!event.target.matches(".dropbtn")){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i=0;i<dropdowns.length;i++){
            var dropdowns = dropdowns[i];
            if(dropdowns.classList.contains("show")){
                openDropdown.classList.remove("show");
            }
        }
    }
}