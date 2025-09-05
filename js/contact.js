document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const submitBtn = document.getElementById("submit"); 
    const modal = document.getElementById("confirm-modal");
    const modalBtn = document.getElementById("button"); 
    function checkInputs() {
        if (
            nameInput.value.trim() !== "" &&
            emailInput.value.trim() !== "" &&
            messageInput.value.trim() !== ""
        ) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
  
        submitBtn.disabled = true;
        submitBtn.textContent = "Gönderiliyor...";

      
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                modal.style.display = "block"; 
                form.reset(); 
            } else {
                alert("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
            }
        }).catch(error => {
            alert("Bir ağ hatası oluştu. Lütfen internet bağlantınızı kontrol edin.");
        }).finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = "Gönder";
        });
    });
    modalBtn.addEventListener("click", () => {
        modal.style.display = "none";
        checkInputs();
    });
    [nameInput, emailInput, messageInput].forEach((input) =>
        input.addEventListener("input", checkInputs)
    );
    checkInputs();
});