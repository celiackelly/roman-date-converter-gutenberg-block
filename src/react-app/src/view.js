import { createRoot, render, createElement } from "@wordpress/element";
import App from "./App";

addEventListener("DOMContentLoaded", (event) => {
	const domElement = document.getElementById("react-app");
	const uiElement = createElement(App);

	if (createRoot) {
		createRoot(domElement).render(uiElement);
	} else {
		render(uiElement, domElement);
	}
});
