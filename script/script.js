
let totalPrice = 0;
let selectedSeatNumber = 0;

const keyButtons = document.querySelectorAll('.kbd');

for (const btn of keyButtons) {
    btn.addEventListener('click', function (e) {
       
        const btnDisabled = document.getElementById('current-seats').innerText;
        const btnParse = parseFloat(btnDisabled)
        // console.log(btnParse)
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
        const grandTotal = totalPrice;
        document.getElementById('grand-total').innerText = grandTotal.toFixed(2);


        // decrease available seats
        const currentSeat = document.getElementById('current-seats');
        const currentScore = parseInt(currentSeat.innerText);
        const newScore = currentScore - 1;
        currentSeat.innerText = newScore;

        // booking seat
        const bookingSeatElement = document.getElementById('booked');
        const currentBookSeat = bookingSeatElement.innerText;
        const newBooked = parseInt(currentBookSeat) + 1;
        console.log(newBooked)
        bookingSeatElement.innerText = newBooked;
        // console.log(bookingSeatElement)

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


// coupon 

const coupon = document.getElementById('coupon-btn');
// console.log(coupon);
coupon.addEventListener('click', function (){
  console.log('click')
//   get value

const couponInput = document.getElementById('coupon-text').value;
// console.log(couponInput)
     
// if(couponInput.value === "NEW15")

}
)

// modal continue
const modalContinueBtn = document.getElementById('modalContinueBtn');
modalContinueBtn.addEventListener('click', () =>{
    window.location.reload();
})