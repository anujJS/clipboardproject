const button = document.querySelector("button"),
    text = document.querySelector("#textarea");


function buttonFunction() {
    navigator.clipboard.writeText(text.value);
}





button.addEventListener("click", buttonFunction);




