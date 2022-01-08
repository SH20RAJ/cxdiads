


let cy_cut = document.getElementById('cy-cut');
let cy_yt = document.getElementsByClassName('cxdiads-yt');


window.onclick = function(){
    cy_toggle()
}


cy_cut.onclick =  cy_toggle;

function cy_toggle (){cy_yt[0].classList.toggle('cy-hide')}