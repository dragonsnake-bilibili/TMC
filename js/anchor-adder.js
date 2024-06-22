// generate anchors dynamically
(() => {
  window.addEventListener("load", () => {
    for (const anchor of document.getElementsByClassName("anchor")) {
      let link = document.createElement("a");
      link.dataset.isAnchor = 1;
      link.href = `#${anchor.id}`;
      link.innerText = "🔗";
      anchor.appendChild(link);
    }
  });
})();