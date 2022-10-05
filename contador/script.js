var currentNumber = 0;
const currentNumberWrapper = document.querySelector("#currentNumber");
const adicionar = document.querySelector(".adicionar");
const subtrair = document.querySelector(".subtrair");
let color;

adicionar.addEventListener("click", () => {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;

    color = (currentNumber < 0) ? "#d90429" : "#eee";
    currentNumberWrapper.style.color = color;
});

subtrair.addEventListener("click", () => {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;

    color = (currentNumber < 0) ? "#d90429" : "#eee";
    currentNumberWrapper.style.color = color;
});
