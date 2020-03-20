var registryButton = document.getElementsByClassName("OptionReg");
var registry = document.getElementsByClassName('Registry');

registryButton.onclick = function (){
    if(registry.style.display = "none"){
        registry.style.display = "block";
    }else{
        registry.style.display = "none";
    }
};