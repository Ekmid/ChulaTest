document.addEventListener("DOMContentLoaded", function() {
    const phoneInput:any = document.getElementById("phone-number");
    const sendButton:any = document.getElementById("send-button");
    const successMessage:any = document.getElementById("success-message");
    const errorMessage:any = document.getElementById("error-message");
    const checkbox:any = document.getElementById("checkbox");

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
