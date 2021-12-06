const handleMenuToggle = () =>
  document.getElementById("header").classList.toggle("open");

const main = () => {
  document
    .getElementById("menu")
    .addEventListener("click", handleMenuToggle);
};

main();
