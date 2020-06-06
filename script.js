const servicesItems = document.querySelectorAll(".services-navbar-item");
let activeItem = servicesItems[0]

servicesItems.forEach(item => {
    item.addEventListener('click', getItemList);
})

function getItemList(event) {
    activeItem.querySelector(".navbar-left-color").classList.toggle("active-service")
    document.querySelector("."+activeItem.getAttribute('name')).classList.toggle("hidden")
    activeItem = event.target.parentNode
    activeItem.querySelector(".navbar-left-color").classList.toggle("active-service")
    document.querySelector("."+activeItem.getAttribute('name')).classList.toggle("hidden")
}

