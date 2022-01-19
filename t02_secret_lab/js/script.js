let header = document.getElementById("subject"),
    btn = document.getElementById("btn"),
    lab = document.getElementById("lab");
    
btn.onclick = function transformation() {
    if( header.textContent == "Human" ) {
    header.textContent = "Beast";
    header.style = "font: 130px 'Bowly One', cursive; letter-spacing: 6px";
    lab.style = "background: #70964b"
    } else {
        header.textContent = "Human";
        header.style = "font: 60px 'Bowly One', cursive; letter-spacing: 2px";
        lab.style = "background: #ffb300"   
    }

    
}