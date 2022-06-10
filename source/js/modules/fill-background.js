export default () => {
  let menu = document.getElementById(`menu`);
  let background = document.getElementById(`background`);

  menu.addEventListener(`click`, (event) => {
    const tag = event.target;
    const dataHref = tag.getAttribute(`data-href`);
    const isPrizes = dataHref === `prizes`;

    if (isPrizes) {
      background.classList.add(`screen__background--active`);
    }

    const removeBackground = () => {
      background.classList.remove(`screen__background--active`);
    };

    setTimeout(removeBackground, 700);
  });
};
