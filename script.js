document.addEventListener("DOMContentLoaded", () => {
  console.log("rushikesh");

  const display = document.getElementById("calc-display");

  const buttons = document.getElementsByClassName("btn");

  let currValue = "";

  const evaluateResult = () => {

		const newValue = currValue
		.replace('×', '*')
		.replace('÷', '/')
		.replace('sin', 'Math.sin')
		.replace('cos', 'Math.cos')
		.replace('ln', 'Math.log')
		.replace('π', 'Math.PI')
		.replace('log', 'Math.log10')
		.replace('e', 'Math.E')
		.replace('tan', 'Math.tan')
		.replace('√', 'Math.sqrt');


    const result = eval(newValue);
    currValue = result.toString();
    display.value = currValue;
  };


  for (let i = 0; i < buttons.length; i++) {
    const btns = buttons[i];

    btns.addEventListener("click", () => {
      let inputVal = btns.innerText;

			try {
				if(inputVal === "⌫"){
					currValue = currValue.slice(0, -1);
					display.value = currValue
				}
				else if (inputVal == "AC") {
					currValue = "";
					display.value = "";
				} else if (inputVal == "=") {
					evaluateResult();
				} else {
					currValue += inputVal;
					display.value = currValue;
				}
				
			} catch (error) {
				currValue = "Error";
				display.value = currValue;
			}

      
    });
  }
});
