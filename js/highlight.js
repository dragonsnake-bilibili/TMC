// highlight recently published items
(() => {
  window.addEventListener("load", () => {
    const current_time = new Date();
    for (let publish_time of document.getElementsByClassName("publish-time")) {
      let publish_date = new Date(
        Date.UTC(...publish_time.innerText.split('-').map((item, index) => (Number(item) - (index === 1))))
      );
      const days = Math.floor((current_time.getTime() - publish_date.getTime()) / (1000 * 60 * 60 * 24));
      if (days > 7) {
        continue;
      }
      publish_time.innerText = `${days}天前（${publish_time.innerText}）`;
      publish_time.classList.add("new");
    }
  });
})();