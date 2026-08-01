let result = 0;
const display = document.querySelector("#display");
const choices = document.querySelectorAll(".button")

const logic = (userChoice) => {
    if(userChoice === "ac") {
        display.value = "";
    }else if(userChoice == "del") {
        display.value = display.value.slice(0, -1);
    }else if(userChoice === "=") {
        try {
            result = eval(display.value);
            display.value = result;
        }catch(error) {
            display.value = "Error";
        }
    }else {
        display.value += userChoice;
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        logic(userChoice);
    });
});
