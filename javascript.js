let s = 9;
let cellSide = Math.floor(720/s);
const container = document.querySelector("#container");
let width = cellSide*s + 'px';
container.style.width = width;
container.style.height = width;
for(let i = 1; i <= s*s; i++){
    const div = document.createElement("div");
    div.style.width = cellSide + 'px';
    div.style.height = cellSide + 'px';
    container.appendChild(div);
}

