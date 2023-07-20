const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

const rightDiv = document.querySelector('.rightDiv');
const rightDivImg = rightDiv.querySelector('img');
const rightDivWidth = rightDiv.offsetWidth;
const rightDivHeight = rightDiv.offsetHeight;
const imgWidth = rightDivImg.offsetWidth;
const imgHeight = rightDivImg.offsetHeight;

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

function floatImage() {
    const centerX = rightDivWidth / 2;
    const centerY = rightDivHeight / 2;
  
    const moveX = Math.sin(Date.now() / 1000) * 10; // Adjust the value (10) to control the floating range
    const moveY = Math.cos(Date.now() / 1000) * 10; // Adjust the value (10) to control the floating range
  
    rightDivImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
  
    requestAnimationFrame(floatImage);
  }
  
  floatImage();