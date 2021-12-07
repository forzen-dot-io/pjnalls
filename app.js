const handleMenuToggle = () => {
  ["header", "menu", "overlay"].forEach((id) => {
    document.getElementById(id).classList.toggle("open");
    if (id === "overlay") {
      const overlay = document.getElementById(id).classList;
      overlay.contains("open")
        ? (overlay.remove("fade-out"), overlay.add("fade-in"))
        : (overlay.remove("fade-in"), overlay.add("fade-out"));
    }
  });
};

const main = () => {
  document.getElementById("menu").addEventListener("click", handleMenuToggle);
};

main();
