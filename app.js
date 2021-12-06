const handleMenuToggle = () => {
  ["header", "menu", "overlay"].forEach((id) =>
    document.getElementById(id).classList.toggle("open")
  );
};

const main = () => {
  document.getElementById("menu").addEventListener("click", handleMenuToggle);
};

main();
