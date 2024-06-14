document.addEventListener("DOMContentLoaded", function() {
    const modal:any = document.getElementById("modal");
    const openModalButton:any = document.getElementById("open-modal");
    const closeModalButton:any = document.getElementsByClassName("close")[0];

    const phoneInput:any = document.getElementById("modal-phone-number");
    const sendButton:any = document.getElementById("modal-send-button");
    const successMessage:any = document.getElementById("modal-success-message");
    const errorMessage:any = document.getElementById("modal-error-message");
    const checkbox:any = document.getElementById("modal-checkbox");

    openModalButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    phoneInput.addEventListener("input", function() {
        let input = phoneInput.value.replace(/\D/g, '');
        let formattedInput = "+7 (";
        
        if (input.length > 1) formattedInput += input.substring(1, 4);
        if (input.length >= 5) formattedInput += ") " + input.substring(4, 7);
        if (input.length >= 8) formattedInput += "-" + input.substring(7, 9);
        if (input.length >= 10) formattedInput += "-" + input.substring(9, 11);
        
        phoneInput.value = formattedInput;
    });

    sendButton.addEventListener("click", function() {
        const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        
        if (phonePattern.test(phoneInput.value) && checkbox.checked) {
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
        } else {
            successMessage.style.display = "none";
            errorMessage.style.display = "block";
        }
    });
});
