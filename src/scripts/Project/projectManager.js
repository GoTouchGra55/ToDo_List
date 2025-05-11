import { Project } from "./project";

const name = document.querySelector(".pName").value;
const projectPopUp = document.querySelector(".projectInfoTaker");
const form = document.querySelector(".project-info");
const addNewProject = document.querySelector("#addNew");
const proCancel = document.querySelector(".cancel");

form.addEventListener("submit", (event) => {
  event.preventDefault();
})

addNewProject.addEventListener("click", () => {
  projectPopUp.showModal();
});

proCancel.addEventListener("click", () => {
  projectPopUp.close();
})

export const project = new Project(name);