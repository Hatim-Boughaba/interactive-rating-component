function getNumber(clicked_id){
    let my_id = document.getElementById(clicked_id);
    let num = my_id.value;
    let nbrs = document.getElementsByClassName("btn__nbr");
    sessionStorage.setItem("myVal", num);
    my_id.classList.add("is_active");
    for(let i=0; i<nbrs.length; i++){
        if(nbrs[i].id != my_id.id && nbrs[i].className == "btn__nbr is_active"){
            nbrs[i].classList.remove("is_active");
        }
    }
}

function getSelections(){
    let my_select = document.getElementById("selection");
    my_select.innerHTML = sessionStorage.getItem("myVal");
}

function check(){
    let nbrs = document.getElementsByClassName("btn__nbr");
    let ok = false;
    for(let i=0; i<nbrs.length; i++){
        if(nbrs[i].className == "btn__nbr is_active"){
            ok = true;
            window.location = "thankYouState.html"
        }
    }
    try{
        if (ok ==false){
            alert("Give Your Feedback Please")
            throw "Error"
        }
    }catch(err){

    }
}
