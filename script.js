const inputText = document.querySelector("#todo-name");
const addTodoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Animation for the placeholder
inputText.addEventListener("focus", (e) => {
	e.target.previousElementSibling.classList.add("focused");
});

inputText.addEventListener("blur", (e) => {
	if (inputText.value === "") {
		e.target.previousElementSibling.classList.remove("focused");
	}
});

//Event to add the todos to the todolist
addTodoBtn.addEventListener("click", () => {
	addTodoBtn.style.transform = "translateY(5px)";
	setTimeout(() => {
		addTodoBtn.style.transform = "translateY(0px)";
	}, 150);

	//Elements created on the DOM
	const listItem = document.createElement("li");
	const itemText = document.createElement("p");
	const itemDelete = document.createElement("div");
	const deleteSpan1 = document.createElement("span");
	const deleteSpan2 = document.createElement("span");

	itemDelete.className = "delete";
	deleteSpan1.className = "line1";
	deleteSpan2.className = "line2";

	if (inputText.value === "") {
		alert("The Input field is empty.");
	} else {
		itemDelete.appendChild(deleteSpan1);
		itemDelete.appendChild(deleteSpan2);
		itemText.appendChild(document.createTextNode(inputText.value));
		listItem.appendChild(itemText);
		listItem.appendChild(itemDelete);
		todoList.appendChild(listItem);
	}

	inputText.value = "";
});

//Event to remove a todo from the todolist
todoList.addEventListener("click", (e) => {
	if (e.target.parentElement.classList.contains("delete")) {
		e.target.parentElement.parentElement.remove();
	}
});

//Event to edit a todo which is already on the todolist
todoList.addEventListener("click", (e) => {
	if (e.target.parentElement.parentElement.classList.contains("todo-list")) {
		inputText.value = e.target.textContent;
		e.target.parentElement.remove();
	}
});
