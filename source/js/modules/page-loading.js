export default () => {
  const body = document.body;

  window.addEventListener(`load`, function () {
    body.classList.add(`page-is-loaded`);
  });
};
