document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.querySelector("#booking-form");
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const windows = document.querySelector("#windows").value;

    alert(`Tack ${name}! Din bokning för ${windows} fönster har tagits emot.`);
    bookingForm.reset();
  });
});
