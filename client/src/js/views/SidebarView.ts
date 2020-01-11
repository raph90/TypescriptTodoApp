import nodes from "./nodes";

export const changeMainTitle = (title: string): void => {
  nodes.mainTitle.textContent = title;
};

function setTitle(e: Event): void {
  const targetNode = e.target as HTMLElement;
  const clsList = targetNode.classList;
  if (clsList.contains("menu-item")) {
    if (clsList.contains("top-level")) {
      const id = targetNode.id;
      changeMainTitle(id);
    }
  }
}

export const initSidebarView = (): void => {
  nodes.sidebarItems.addEventListener("click", setTitle);
};
