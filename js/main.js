
// Sessão de slides

let radio = document.querySelector('.manual-btn')
let counter = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    nextImg()
}, 7000)

function nextImg() {
    counter++

    if(counter > 4) {
        counter = 1
    }
    document.getElementById('radio'+counter).checked = true

}

// Sessão da galeria de serviços

const items = document.querySelectorAll(".item");
    items.forEach((item) => {
        item.addEventListener("click", () => {
            items.forEach((item) => item.classList.remove("show"));
            item.classList.add("show");
        });
    });
