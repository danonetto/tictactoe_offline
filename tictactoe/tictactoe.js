


let counter = 0;
const topl = document.getElementById("boxtl"); 
let matrix=[[0,0,0],[0,0,0],[0,0,0]];
topl.addEventListener("click", function() {
    if (counter % 2 === 0) {
        topl.style.backgroundImage = "url('close.png')";
        topl.style.backgroundSize = "100% 100%";
        matrix[0][0]=1;
    } else {
        topl.style.backgroundImage = "url('circle-ring.png')";
        topl.style.backgroundSize = "100% 100%";
    }
    counter++;
    topl.style.pointerEvents = "none";
    checkgamestatus();
});
const topm = document.getElementById("boxtm"); 

topm.addEventListener("click", function() {
    if (counter % 2 === 0) {
        topm.style.backgroundImage = "url('close.png')";
        topm.style.backgroundSize = "100% 100%";
        matrix[0][1]=1;
    } else {
        topm.style.backgroundImage = "url('circle-ring.png')";
        topm.style.backgroundSize = "100% 100%";
    }
    counter++;
    topm.style.pointerEvents = "none";
    checkgamestatus();
});

const topr = document.getElementById("boxtr"); 

topr.addEventListener("click", function() {
    if (counter % 2 === 0) {
        topr.style.backgroundImage = "url('close.png')";
        topr.style.backgroundSize = "100% 100%";
        matrix[0][2]=1;
    } else {
        topr.style.backgroundImage = "url('circle-ring.png')";
        topr.style.backgroundSize = "100% 100%";
    }
    counter++;
    
    topr.style.pointerEvents = "none";
    checkgamestatus();
});
const middlel = document.getElementById("boxml"); 

middlel.addEventListener("click", function() {
    if (counter % 2 === 0) {
        middlel.style.backgroundImage = "url('close.png')";
        middlel.style.backgroundSize = "100% 100%";
        matrix[1][0]=1;
    } else {
        middlel.style.backgroundImage = "url('circle-ring.png')";
        middlel.style.backgroundSize = "100% 100%";
    }
    counter++;
    middlel.style.pointerEvents = "none";
    checkgamestatus();
});
const middle = document.getElementById("boxm"); 

middle.addEventListener("click", function() {
    if (counter % 2 === 0) {
        middle.style.backgroundImage = "url('close.png')";
        middle.style.backgroundSize = "100% 100%";
        matrix[1][1]=1;
    } else {
        middle.style.backgroundImage = "url('circle-ring.png')";
        middle.style.backgroundSize = "100% 100%";
    }
    counter++;
    middle.style.pointerEvents = "none";
    checkgamestatus();
});
const middler = document.getElementById("boxmr"); 

middler.addEventListener("click", function() {
    if (counter % 2 === 0) {
        middler.style.backgroundImage = "url('close.png')";
        middler.style.backgroundSize = "100% 100%";
        matrix[1][2]=1;
    } else {
        middler.style.backgroundImage = "url('circle-ring.png')";
        middler.style.backgroundSize = "100% 100%";
    }
    counter++;
    middler.style.pointerEvents = "none";
    checkgamestatus();
});
const bottoml = document.getElementById("boxbl"); 

bottoml.addEventListener("click", function() {
    if (counter % 2 === 0) {
        bottoml.style.backgroundImage = "url('close.png')";
        bottoml.style.backgroundSize = "100% 100%";
        matrix[2][0]=1;
    } else {
        bottoml.style.backgroundImage = "url('circle-ring.png')";
        bottoml.style.backgroundSize = "100% 100%";
    }
    counter++;
    bottoml.style.pointerEvents = "none";
    checkgamestatus();
});
const bottomm = document.getElementById("boxbm"); 

bottomm.addEventListener("click", function() {
    if (counter % 2 === 0) {
        bottomm.style.backgroundImage = "url('close.png')";
        bottomm.style.backgroundSize = "100% 100%";
        matrix[2][1]=1;
    } else {
        bottomm.style.backgroundImage = "url('circle-ring.png')";
        bottomm.style.backgroundSize = "100% 100%";
    }
    counter++;
    bottomm.style.pointerEvents = "none";
    checkgamestatus();
});
const bottomr = document.getElementById("boxbr"); 

bottomr.addEventListener("click", function() {
    if (counter % 2 === 0) {
        bottomr.style.backgroundImage = "url('close.png')";
        bottomr.style.backgroundSize = "100% 100%";
        matrix[2][2]=1;
    } else {
        bottomr.style.backgroundImage = "url('circle-ring.png')";
        bottomr.style.backgroundSize = "100% 100%";
    }
    counter++;
    bottomr.style.pointerEvents = "none";
    checkgamestatus();
});

const popup=document.getElementById("popup");
const reset=document.getElementById("reset");
reset.addEventListener("click",function(){
    counter = 0;
    
    
    topl.style.pointerEvents = "auto";
    topm.style.pointerEvents = "auto";
    topr.style.pointerEvents = "auto";
    middlel.style.pointerEvents = "auto";
    middle.style.pointerEvents = "auto";
    middler.style.pointerEvents = "auto";
    bottoml.style.pointerEvents = "auto";
    bottomm.style.pointerEvents = "auto";
    bottomr.style.pointerEvents = "auto";
    
    
    topl.style.backgroundImage = "";
    topm.style.backgroundImage = "";
    topr.style.backgroundImage = "";
    middlel.style.backgroundImage = "";
    middle.style.backgroundImage = "";
    middler.style.backgroundImage = "";
    bottoml.style.backgroundImage = "";
    bottomm.style.backgroundImage = "";
    bottomr.style.backgroundImage = "";
    popup.style.display = 'none';
});

function checkgamestatus(){
    if(counter==9){
    let ok=0;    
    for(let i=0;i<3;i++){
        if(matrix[0][i]===matrix[1][i] && matrix[2][i]===matrix[0][i] && matrix[0][i]===1){
                popup.textContent="'x'nyert";
                popup.style.display = 'block';
                ok++;
                confetti();
                
            }
            if(matrix[0][i]===matrix[1][i] && matrix[2][i]===matrix[0][i] && matrix[0][i]===0){
                popup.textContent="'o'nyert";
                popup.style.display = 'block';
                ok++;
                confetti();
                
            } 
            if(matrix[i][0]===matrix[i][1] && matrix[i][0]===matrix[i][2] && matrix[i][0]===1){
                popup.textContent="'x'nyert";
                popup.style.display = 'block';
                ok++;
                confetti();
            }
            if(matrix[i][0]===matrix[i][1] && matrix[i][0]===matrix[i][2] && matrix[i][0]===0){
                popup.textContent="'o'nyert";
                popup.style.visibility='visible';
                ok++;
                confetti();
            }
         
            
            
    }
            if(matrix[0][0]===matrix[1][1] && matrix[0][0]===matrix[2][2]&& matrix[0][0]===0){
                popup.textContent="'o'nyert";
                popup.style.display = 'block';
                ok++;
                confetti();
            }
            if(matrix[0][0]===matrix[1][1] && matrix[0][0]===matrix[2][2]&& matrix[0][0]===1){
                popup.textContent="'x'nyert";
                popup.style.display = 'block';
                ok++;
                confetti();
            }
            if(matrix[0][2]===matrix[1][1] && matrix[0][2]===matrix[2][0] && matrix[0][2]===1){
                popup.textContent="'x'nyert";
                popup.style.display = 'block';
                ok++;
                confetti();
            }
            if(matrix[0][2]===matrix[1][1] && matrix[0][2]===matrix[2][0] && matrix[0][2]===0){
                popup.textContent="'o'nyert";
                popup.style.display = 'block';
                ok++;
                confetti();
            }
            if(ok==0){
                popup.textContent="Döntetlen";
                popup.style.display = 'block';
                confetti();
            }
}
}
