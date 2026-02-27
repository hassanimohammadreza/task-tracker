document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (!form) return;

    const submitButton = form.querySelector("button, input[type='submit']");
    if (!submitButton) return;

    form.addEventListener("submit", () => {
        submitButton.disabled = true;

        if (submitButton.tagName === "BUTTON") {
            submitButton.textContent = "Processing...";
        }

        if (submitButton.tagName === "INPUT") {
            submitButton.value = "Processing...";
        }
    });
});