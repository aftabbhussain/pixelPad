function constructGrid(s){
    const main = document.querySelector(".main")
    const container = document.createElement("div");
    container.id = "container";
    main.appendChild(container);
    let cellSide = Math.floor(720/s);
    let width = cellSide*s + 'px';
    container.style.width = width;
    container.style.height = width;
    for(let i = 1; i <= s*s; i++){
        const div = document.createElement("div");
        div.style.width = cellSide + 'px';
        div.style.height = cellSide + 'px';
        container.appendChild(div);
    }

    container.addEventListener("mouseover", (e) => {
        if(e.target !== container) {
            e.target.style.backgroundColor = "black";
        }
    });
}

const applybtn = document.querySelector("#applybtn");
applybtn.addEventListener("click", () =>{
    container.remove();
    const gridSize = document.querySelector("#grid-size").value;
    constructGrid(gridSize);
});

const resetbtn = document.querySelector("#resetbtn");
resetbtn.addEventListener("click", () => {
    container.remove();
    const gridSize = document.querySelector("#grid-size").value;
    constructGrid(gridSize);
})