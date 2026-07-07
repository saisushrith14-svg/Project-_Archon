const overlay = document.querySelector(".overlay");
const authContainer = document.querySelector(".auth-container");

overlay.addEventListener("click", () => {
    window.location.href = "index.html";
});

authContainer.addEventListener("click", (event) => {
    event.stopPropagation();
});