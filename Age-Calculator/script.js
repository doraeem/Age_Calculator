function calculateAge() {
   
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Current date
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Months are zero-based, so added 1
    const currentDay = today.getDate();

 
    let age = currentYear - year;

   
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

   
    const resultElement = document.getElementById('result');
    if (age >= 0) {
        resultElement.innerHTML = `You are ${age} years old!`;
    } else {
        resultElement.innerHTML = "Please enter a valid date of birth.";
    }
}
