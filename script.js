const OptionsButtons = document.querySelectorAll("#Options button");
OptionsButtons.forEach((btn, index) => {
    btn.id = index;   // assigns 0, 1, 2...
});