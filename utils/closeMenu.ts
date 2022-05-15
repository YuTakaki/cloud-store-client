export const closeMenus = (e : MouseEvent) => {
  const target = e.target as HTMLElement;
  const menus = [
    {
      button: 'btn-menu-basic-sort',
      menu: 'menu-basic-sort'
    },
  ];

  menus.forEach(_menu => {
    const button = document.querySelector(`#${_menu.button}`);
    const menu = document.querySelector(`#${_menu.menu}`);
    if (target !== menu && target.parentElement !== menu && target !== button && target.parentElement !== button) {
      menu?.classList.add('hidden');
    }
  })
}