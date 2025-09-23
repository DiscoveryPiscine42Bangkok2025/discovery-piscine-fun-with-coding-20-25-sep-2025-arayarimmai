const list = document.getElementById("ft_list");
const newBtn = document.getElementById("newBtn");

// ฟังก์ชันสร้าง todo ใหม่
function createTodo(text) {
  const todo = document.createElement("div");
  todo.textContent = text;

  // event สำหรับลบ
  todo.addEventListener("click", () => {
    if (confirm("Do you want to remove this TO DO?")) {
      list.removeChild(todo);
    }
  });

  list.appendChild(todo);
}

// ปุ่ม New
newBtn.addEventListener("click", () => {
  const task = prompt("Enter a new TO DO:");
  if (task && task.trim() !== "") {
    createTodo(task.trim());
  }
});
