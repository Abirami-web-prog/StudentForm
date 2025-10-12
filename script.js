function addStudent() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const course = document.getElementById("course").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!name || !age || !course || !email || !gender) {
    alert("Please fill all fields!");
    return;
  }

  const genderValue = gender.value;

  const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${course}</td>
    <td>${genderValue}</td>
    <td>${email}</td>
    <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
  `;

  // Reset form
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.querySelectorAll('input[name="gender"]').forEach(el => el.checked = false);
}

function deleteRow(btn) {
  const row = btn.parentNode.parentNode;
  row.remove();
}