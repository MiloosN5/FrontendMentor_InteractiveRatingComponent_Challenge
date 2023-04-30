//---------------- TOGGLE RATING/FEEDBACK ----------------//
    let submitButton = document.querySelector('.rating__submit');
    let ratingSection = document.querySelector('.rating');
    let feedbackSection = document.querySelector('.feedback');

    submitButton.addEventListener('click', () => {
        feedbackSection.classList.add('displayOn');
        feedbackSection.classList.remove('displayOff');
        ratingSection.classList.add('displayOff');
        ratingSection.classList.remove('displayOn');
    })

//---------------- PICK A RATE & DISPLAY MESSAGE ----------------//
    let rateWrapper = document.querySelector('.rating__rate');
    const rateNumbers = Array.from(rateWrapper.querySelectorAll('div span'));
    let displayMessage = document.querySelector('.feedback__youSelected span');

    rateNumbers.forEach((number) => {
        number.addEventListener('click', (event) => {
            const thisNumber = event.target;
            const allOtherNumbers = rateNumbers.filter(number => {
                return (number !== thisNumber);
            });
            allOtherNumbers.forEach(number => {
                number.classList.remove('activeRate');
                number.classList.add('defaultRate');
            });
            thisNumber.classList.add('activeRate');
            thisNumber.classList.remove('defaultRate');
            displayMessage.innerHTML = `You selected ${event.target.innerHTML} out of 5`;
        })
    })