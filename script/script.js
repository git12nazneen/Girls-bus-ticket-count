// title count
let totalPrice = 0;



const keyButton = document.querySelectorAll('.kbd');
    
// console.log(keyButton)
for (const btn of keyButton) {
   btn.addEventListener('click', function (e){
     console.log(e.target.innerText)
     setBackGroundColorElement(e.target.id);

    //  seat price
    const seatPriceElement = document.getElementById('seatPrice');
    // console.log(seatPriceElement);
    const priceText = seatPriceElement.textContent.trim();
    const priceValue = parseFloat(priceText);
    // console.log('ppp', priceValue)
    // calculate
    totalPrice += priceValue;
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2)
    
    
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

// available

    const keyButton = document.querySelectorAll('.kbd')
    for (let i = 0; i < keyButton.length; i++) {
       keyButton[i].addEventListener('click', function (){
         let currentSeat = parseInt(document.getElementById('current-seats').innerText);
         if(currentSeat > 0){
            currentSeat--;
            document.getElementById('current-seats').innerText = currentSeat;
        }
       });
        
    }

  


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
// append child
const allKeys = document.querySelectorAll("#all-keys .kbd");

allKeys.forEach(key => {
    key.addEventListener("click", e => {
        const tableBody = document.getElementById('seatBody');

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${e.target.id}</td>
            <td>Economy</td>
            <td>550</td>
        `;
        
        tableBody.appendChild(newRow);
    });
});


    
let selectedSeatNumber = 0;
//    kkkkk
for (let i = 0; i < keyButton.length; i++) {
   
    keyButton[i].addEventListener('click', function (){
      if(!this.disabled){
        let currentSeat = parseInt(document.getElementById('current-seats').innerText);
        if(currentSeat > 0 && selectedSeatNumber < 5){
            selectedSeatNumber++;
            this.disabled = true;
            if(selectedSeatNumber === 4){
                alert('You have selected 4 seats');
                for (let j = 0;j < keyButton.length;j++) {
              
                    if(!keyButton[j].disabled){
                        keyButton[j].disabled = true;
                    }
                }
                    
                }
            }
        }
      }
    )
}
    
// uuuuuu