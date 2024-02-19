// title count
let totalPrice = 0;



const keyButton = document.querySelectorAll('.kbd');
    
// console.log(keyButton)
for (const btn of keyButton) {
   btn.addEventListener('click', function (e){
     console.log(e.target.innerText)

    //  seat kome 1ta kore
  
const currentSeat = document.getElementById('current-seats');
// console.log('seat', currentSeat)
    const currentSeatText = currentSeat.innerText;
    const currentScore = parseInt(currentSeatText)
    // console.log('seat', currentScore)
    const newScore = currentScore - 1;
// currentSeatText.innerText = newScore;
    // console.log(newScore)
    currentSeat.innerText = newScore;

    // booking seat
    const bookingSeatElement = document.getElementById('booked');
    const currentBookSeat = bookingSeatElement.innerText;
    const currentBook = parseInt(currentBookSeat);
    // console.log(currentBook, 'book')
    const newBooked = currentBook + 1;
    // console.log(newBooked);
    bookingSeatElement.innerText = newBooked;
   }
   
   )


}


