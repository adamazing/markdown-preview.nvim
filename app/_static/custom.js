  document.addEventListener("DOMContentLoaded", function() {
    // Attach the toggleButton function to the onClick event
    var button = document.getElementById("toggleButton");
    button.onclick = toggleButton;

    console.log('Attached to toggleButton click event');
  });

  function toggleButton() {
    var button = document.getElementById("toggleButton");
    button.textContent = button.textContent === "Hide" ? "Unhide" : "Hide";
    button.classList.toggle("orange");
    // YourFunctionName(); // Uncomment and replace with your actual function
  }

