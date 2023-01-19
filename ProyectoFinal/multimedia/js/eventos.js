
function ventanaemergente(A) {

    var B = document.getElementById(myModal);
    B.classList.toggle("show");
  }



var tema = window.matchMedia('(prefers-color-scheme: dark)').matches;
tema

if (tema = "true"){
    document.getElementById("html").setAttribute("data-bs-theme","dark");
    tema = "true";       
} else {
    document.getElementById("html").setAttribute("data-bs-theme","light");
    tema = "false";        
}
document.getElementById("oscuridad").onclick = function (){
    if (tema == "false"){
        document.getElementById("html").setAttribute("data-bs-theme","dark");
        tema = "true";       
    } else {
        document.getElementById("html").setAttribute("data-bs-theme","light");
        tema = "false";        
    }
}
