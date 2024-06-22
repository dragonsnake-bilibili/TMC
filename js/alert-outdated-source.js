// show warning about outdated source
(() => {
  window.addEventListener("load", () => {
    let url = new URL(window.location.href);
    if (url.searchParams.get("i")) {
      const link = document.getElementById("outdate-alert-updater");
      url.searchParams.delete("i");
      link.href = url.href;
      const alert = document.getElementById("outdate-alert");
      alert.classList.remove("hidden");
    }
  });
})();