import nodes from "./nodes";

function selectTodo(e: Event): void {
  const selected = e.target as HTMLElement;
  console.log(selected.id)
  const clsList = selected.classList;
  if (clsList.contains("clickToSelect")) {
      console.log("yes")
    const toSelect = document.querySelector(`#span-${selected.id}`);
    // console.log(toSelect)
    toggleClass(toSelect,'todoSelected');
  }
}

function toggleClass(el: Element, className: string): void{
    if (el.classList.contains(className)){
        el.classList.remove(className)
    } else {
        el.classList.add(className);
    }
}

export const initTodoView = (): void => {
  nodes.mainProjectView.addEventListener("click", selectTodo);
};
