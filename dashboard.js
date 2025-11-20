import { supabaseClient } from "./supabase.js";

document.addEventListener("DOMContentLoaded", () => {
  
  // ----- TASKS -----
  const taskForm = document.getElementById("taskForm");
  const taskList = document.getElementById("taskList");

  taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDesc").value;
    const due_date = document.getElementById("taskDue").value;

    const { data, error } = await supabaseClient
      .from("tasks")
      .insert([{ title, description, due_date, completed: false }]);

    if (error) return alert(error.message);

    const li = document.createElement("li");
    li.textContent = `${title} - ${description} (Due: ${due_date})`;
    taskList.appendChild(li);
    taskForm.reset();
  });

  // ----- EXPENSES -----
  const expenseForm = document.getElementById("expenseForm");
  const expenseList = document.getElementById("expenseList");

  expenseForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const description = document.getElementById("expenseDesc").value;
    const amount = parseFloat(document.getElementById("expenseAmount").value);
    const category = document.getElementById("expenseCategory").value;
    const date = document.getElementById("expenseDate").value;

    const { data, error } = await supabaseClient
      .from("expenses")
      .insert([{ description, amount, category, date }]);

    if (error) return alert(error.message);

    const li = document.createElement("li");
    li.textContent = `${description} - $${amount} - ${category} (Date: ${date})`;
    expenseList.appendChild(li);
    expenseForm.reset();
  });

  // ----- MOOD -----
  const moodForm = document.getElementById("moodForm");
  const moodList = document.getElementById("moodList");

  moodForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const date = document.getElementById("moodDate").value;
    const mood = document.getElementById("moodValue").value;
    const notes = document.getElementById("moodNotes").value;

    const { data, error } = await supabaseClient
      .from("mood")
      .insert([{ date, mood, notes }]);

    if (error) return alert(error.message);

    const li = document.createElement("li");
    li.textContent = `${date} - ${mood} - ${notes}`;
    moodList.appendChild(li);
    moodForm.reset();
  });

  // ----- GOALS -----
  const goalForm = document.getElementById("goalForm");
  const goalList = document.getElementById("goalList");

  goalForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("goalTitle").value;
    const description = document.getElementById("goalDesc").value;
    const start_date = document.getElementById("goalStart").value;
    const end_date = document.getElementById("goalEnd").value;
    const status = document.getElementById("goalStatus").value;

    const { data, error } = await supabaseClient
      .from("goals")
      .insert([{ title, description, start_date, end_date, status }]);

    if (error) return alert(error.message);

    const li = document.createElement("li");
    li.textContent = `${title} - ${description} (${start_date} to ${end_date}) - ${status}`;
    goalList.appendChild(li);
    goalForm.reset();
  });

  // ----- PLANNER -----
  const plannerForm = document.getElementById("plannerForm");
  const plannerList = document.getElementById("plannerList");

  plannerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const date = document.getElementById("plannerDate").value;
    const tasks = document.getElementById("plannerTasks").value;
    const notes = document.getElementById("plannerNotes").value;
    const priority = document.getElementById("plannerPriority").value;

    const { data, error } = await supabaseClient
      .from("planner")
      .insert([{ date, tasks, notes, priority }]);

    if (error) return alert(error.message);

    const li = document.createElement("li");
    li.textContent = `${date} - ${tasks} - ${notes} - Priority: ${priority}`;
    plannerList.appendChild(li);
    plannerForm.reset();
  });

});