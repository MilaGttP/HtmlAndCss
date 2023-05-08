
const menuItems = document.querySelectorAll('.menu_item');
const menuToggle = document.getElementById('menu_toggle');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuToggle.checked = false;
    });
});