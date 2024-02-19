
let totalPrice = 0;
let selectedSeatNumber = 0;

const keyButtons = document.querySelectorAll('.kbd');

for (const btn of keyButtons) {
    btn.addEventListener('click', function (e) {
       
        const btnDisabled = document.getElementById('current-seats').innerText;
        const btnParse = parseFloat(btnDisabled)
        btn.disabled = true;
        if(btnParse === 36) {
            btn.disabled = true;
            return
        }        
        setBackGroundColorElement(e.target.id);
        // seat price
        const seatPriceElement = document.getElementById('seatPrice');
        const priceText = seatPriceElement.textContent.trim();
        const priceValue = parseFloat(priceText);

        // calculate total price
        totalPrice += priceValue;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);

        // decrease available seats
        const currentSeat = document.getElementById('current-seats');
        const currentScore = parseInt(currentSeat.innerText);
        const newScore = currentScore - 1;
        currentSeat.innerText = newScore;

        // booking seat
        const bookingSeatElement = document.getElementById('booked');
        const currentBookSeat = bookingSeatElement.innerText;
        const newBooked = parseInt(currentBookSeat) + 1;
        bookingSeatElement.innerText = newBooked;

        // append child
        const tableBody = document.getElementById('seatBody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${e.target.id}</td>
            <td>Economy</td>
            <td>550</td>
        `;
        tableBody.appendChild(newRow);

       
    });
}
