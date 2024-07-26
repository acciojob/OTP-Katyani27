//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function() {
    const otpInputs = document.querySelectorAll(".otp-input");
    otpInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            if (input.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });
        
        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && index > 0 && input.value.length === 0) {
                otpInputs[index - 1].focus();
            }
        });
    });

    document.getElementById("verify-btn").addEventListener("click", () => {
        let otp = "";
        otpInputs.forEach(input => otp += input.value);
        alert(`OTP entered: ${otp}`);
    });
});
