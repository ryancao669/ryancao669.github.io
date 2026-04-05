const modalSelectors = {
  trigger: "[data-modal]",
  modal: ".modal",
  close: ".modal-close",
};

const openModal = (modal) => {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeModal = (modal) => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(modalSelectors.trigger);
  if (trigger) {
    const targetId = trigger.dataset.modal;
    const modal = document.getElementById(targetId);
    if (modal) {
      openModal(modal);
    }
  }

  const closeButton = event.target.closest(modalSelectors.close);
  if (closeButton) {
    const modal = closeButton.closest(modalSelectors.modal);
    if (modal) {
      closeModal(modal);
    }
  }

  if (event.target.classList.contains("modal")) {
    closeModal(event.target);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal.is-open").forEach((modal) => {
      closeModal(modal);
    });
  }
});
