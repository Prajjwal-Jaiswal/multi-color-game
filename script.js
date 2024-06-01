let list=['RED','BLUE','GREEN','YELLOW','PINK','WHITE','BLACK','ORANGE'];
let color=['#ff0000','#0000ff','#00ff00','#ffff00','#ff00ff','#ffffff','#ff9900'];

setInterval(display, 1000);

function display()
{
    let a=Math.floor(Math.random() * 8);
    let b=Math.floor(Math.random() * 7);

    const disp=document.querySelector(".title");
    disp.innerText=list[a];
    disp.style.color=color[b];
}