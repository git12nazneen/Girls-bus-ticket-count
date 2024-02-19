
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
            alert('Dont book seat now, you have already selected 4 seat')
            return
        }       
        
        // 
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
coupon.addEventListener('click', function (){
//   console.log('click')
  const couponInput = document.getElementById('coupon-text').value;
//   console.log(couponInput)

if (couponInput === "NEW15") {
    const discountAmount = (totalPrice * 15) / 100;
    const newPrice = totalPrice - discountAmount;

    // Update the value of the coupon input
    document.getElementById('coupon-text').value = newPrice.toFixed(2);

    // Calculate the new grand total after applying the discount
    const newGrandTotal = totalPrice - discountAmount;

    // Update the displayed grand total
    const grandTotalElement = document.getElementById('grand-total');
    grandTotalElement.innerText = newGrandTotal.toFixed(2);

   
    // console.log("Discount applied successfully.");
}
else if(couponInput === "Couple20"){
    const discountAmount = (totalPrice * 20) / 100;
    const newPrice = totalPrice - discountAmount;

    // Update the value of the coupon input
    document.getElementById('coupon-text').value = newPrice.toFixed(2);
   
    // Calculate the new grand total after applying the discount
    const newGrandTotal = totalPrice - discountAmount;

    // Update the displayed grand total
    const grandTotalElement = document.getElementById('grand-total');
    grandTotalElement.innerText = newGrandTotal.toFixed(2);

}
else{
    alert('choose 4')
}

}
)

// modal continue
const modalContinueBtn = document.getElementById('modalContinueBtn');
modalContinueBtn.addEventListener('click', () =>{
    window.location.reload();
})