const products = document.querySelectorAll(".product");

if (products) {
  products.forEach((elem) => {
    let currentProduct = elem;
    const imageSwitchItems = currentProduct.querySelectorAll(
      ".image-switch__item"
    );
    const imagePagination = currentProduct.querySelector(".image-pagination");

    if (imageSwitchItems.length > 1) {
      imageSwitchItems.forEach((elem, index) => {
        elem.setAttribute("data-index", index);
        imagePagination.innerHTML += `<li class="image-pagination__item ${
          index == 0 ? "image-pagination__item--active" : ""
        }" data-index="${index}"></li>`;

        elem.addEventListener("mouseenter", (e) => {
          currentProduct
            .querySelectorAll(".image-pagination__item")
            .forEach((elem) => {
              elem.classList.remove("image-pagination__item--active");
            });
          currentProduct
            .querySelector(
              `.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`
            )
            .classList.add("image-pagination__item--active");
        });

        elem.addEventListener("mouseleave", (e) => {
          currentProduct
            .querySelectorAll(".image-pagination__item")
            .forEach((elem) => {
              elem.classList.remove("image-pagination__item--active");
            });
          currentProduct
            .querySelector(`.image-pagination__item[data-index="0"]`)
            .classList.add("image-pagination__item--active");
        });
      });
    }
  });
}

function viewCode() {
  let codeWiewBtn = document.querySelectorAll(".code-view-btn");
  let codeWrapper = document.querySelectorAll(".code-wrapper");
  let pre = document.querySelectorAll("pre");

  for (let k = 0; k < codeWiewBtn.length; k++) {
    codeWiewBtn[k].onclick = function viewCode() {
      pre[k].classList.toggle("pre-active");

      if (codeWrapper[k].classList.contains("code-view")) {
        codeWrapper[k].classList.remove("code-view");
        codeWrapper[k].classList.add("code-hide");
      } else {
        codeWrapper[k].classList.remove("code-hide");
        codeWrapper[k].classList.add("code-view");
      }

      if (codeWrapper[k].classList.contains("code-view")) {
        codeWiewBtn[k].textContent = "Скрыть код";
      } else {
        codeWiewBtn[k].textContent = "Показать код";
      }
    };
  }
}

viewCode();
