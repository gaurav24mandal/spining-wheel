 // JavaScript functionality for spinning the wheel
 const arrow = document.querySelector('.arrow');
 const message = document.querySelector('.message');
 const spinButton = document.querySelector('#spinButton');
 let spinCount = 0;
 let rotationAngle = 0;
 let wheelInterval;

 spinButton.addEventListener('click', startSpin);

 function startSpin() {
   spinCount++;
   rotationAngle += 360 * spinCount;
   arrow.style.transform = `rotate(${rotationAngle}deg)`;
   spinButton.disabled = true;
  // message.textContent = "Spinning...";

   // Start the spinning animation
   wheelInterval = setInterval(() => {
     rotationAngle += 10;
     arrow.style.transform = `rotate(${rotationAngle}deg)`;
   }, 50);

   // Perform the stop action after 2 seconds
   setTimeout(stopSpin, 2000);
 }

 function stopSpin() {
   clearInterval(wheelInterval);
   spinButton.disabled = false;

   // Perform the stop action or determine the prize
   if (spinCount === 1) {
     // First spin, display "try again" message
    
     alert("Try again!");
   } else if (spinCount === 2) {
     // Second spin, deliver gift
     const prizes = ["$10 Gift Card", "$20 Gift Card", "$50 Gift Card", ];
     const randomIndex = Math.floor(Math.random() * prizes.length);
     const prize = prizes[randomIndex];
     alert(`Congratulations! You won: ${prize}`);
     message.textContent = "Congo! You Won a Gift!";
   }
   else{
    alert("sorry no chance left better  luck next time thank you !!!!")
    message.textContent = "byee!! " ;
   }
 }