// You can expand this with interactive features later.
// For now, just logging slider value.
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");

  if (slider) {
    slider.addEventListener("input", (e) => {
      console.log(`Slider value: ${e.target.value}`);
      // You can dynamically update salary display here if needed
    });
  }
});
