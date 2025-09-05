document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("name");
  const surname = document.getElementById("surname");
  const email = document.getElementById("email");
  const submit = document.getElementById("submit");

  submit.addEventListener("click", () => {
    if (
      name.value.length == "" ||
      surname.value.length == "" ||
      email.value.length == ""
    ) {
      alert("Tüm alanların dolu olduğundan emin olunuz");
    } else {
      alert("Form başarıyla gönderildi");
    }
  });
});
