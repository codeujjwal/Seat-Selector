const container = document.querySelector(".container");
const seats = document.querySelectorAll(".seat");
const movieselct = document.getElementById("movie");
const count = document.getElementById("count");
const total = document.getElementById("total");
const price = document.getElementById("price");
let ticketprice = movieselct.value;

function selectedCount() {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  const selectedSeatsCount = selectedSeats.length - 1;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketprice;
  price.innerText = selectedSeatsCount * ticketprice;
}

movieselct.addEventListener("change", (e) => {
  ticketprice = +e.target.value;
  selectedCount();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    selectedCount();
  }
});
