import nodes from "./nodes";

export const changeMainTitle = (title: string): void => {
    nodes.mainTitle = title;
}

function setTitle(e: Event): void {
    const targetNode = e.target as HTMLElement;
    if (targetNode.classList.contains('menu-item')){
        const id = targetNode.id
        console.log(id, targetNode)
    }
   
}

export const initSidebarView = (): void => {
    nodes.sidebarItems.addEventListener('click', setTitle);
}


