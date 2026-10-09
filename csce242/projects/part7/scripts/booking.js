const form = document.getElementById("booking-form");
const result = document.getElementById("form-result");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    result.innerHTML = "Sending...";

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    if (data.success) {
        result.innerHTML = "Booking request sent successfully!";
        form.reset();
    } else {
        result.innerHTML = "Booking request did NOT send successfully!";
    }
});