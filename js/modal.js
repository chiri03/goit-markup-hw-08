(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

const mobileNav = document.querySelector(".main_nav_list");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = mobileNav.getAttribute("data-visible");

  console.log(visibility);
  if (visibility === "false") {
    mobileNav.setAttribute("data-visible", true);
  } else if (visibility === "true") {
    mobileNav.setAttribute("data-visible", false);
  }
});
