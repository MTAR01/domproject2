// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
  
  // Get the elements
  const colorBox = document.getElementById('color-box');
  const changeColorBtn = document.getElementById('change-color-btn');

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Event listener for the button click
  changeColorBtn.addEventListener('click', function() {
    // Change the background color of the color box
    colorBox.style.backgroundColor = getRandomColor();
  });

});
