const handleMenuToggle = () =>
  document.getElementById("menu").classList.toggle("open");

const main = () => {
  document
    .getElementById("menu")
    .addEventListener("click", handleMenuToggle);
};

main();
