const menuicon = document .getElementById('menu-icon')
const menu = document .getElementById('menu')

menuicon.addEventListener("click", () => {
    if(menu.className === "hidden"){
        menu.className.remove("hidden")
    }else{
        menu.classList.add("hidden");
    }
});