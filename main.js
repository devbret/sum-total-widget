function main() {
    //Main program variables.
    const userInput = document.querySelector(`#userInput`);
    const output = document.querySelector(`#output`);
    //Input event listener; changes output as new values are input into widget.
    userInput.addEventListener(`input`, function(){
        //Spliting the user input into an array.
        const data = userInput.value.split(``);
        //Making sure that all of the values in the "data" variable can be converted to numbers.
        if (data.some(d => isNaN(d))) {
            //If the input contains characters other than numbers, the user is reminded to only input number values.
            output.textContent = `Please only enter numbers.`;
            output.style.fontSize = `18px`;
            return;
        }
        //If all of the values in the data variable are numbers, the program then adds them together (as they are being typed) and displays them via the output text.
        output.textContent = data.reduce((total,d) => {
            total += Number(d);
            return total;
        },0);
        output.style.fontSize = `100px`;
    });
}
main();