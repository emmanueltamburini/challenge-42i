//Menu

const listItems = document.querySelectorAll('.list-group-item');

const answer1Div = document.getElementById('answer-1');

const answer2Div = document.getElementById('answer-2');

listItems.forEach((item) => {
    item.addEventListener('click', function () {
        listItems.forEach((otherItem) => {
            otherItem.classList.remove('active');
        });
        this.classList.add('active');

        if (this.id === 'question-1') {
            answer1Div.classList.remove('hidden');
            answer2Div.classList.add('hidden');
        } 

        if (this.id === 'question-2') {
            answer1Div.classList.add('hidden');
            answer2Div.classList.remove('hidden');
        }        
    });
});

document.addEventListener("DOMContentLoaded", function () {
    //Question 1
    const numberInput1 = document.getElementById("number-input-1");
    const addButton1 = document.getElementById("add-button-1");
    const list1 = document.getElementById("list-1");

    const numberInput2 = document.getElementById("number-input-2");
    const addButton2 = document.getElementById("add-button-2");
    const list2 = document.getElementById("list-2");

    const resultQuestion1Container = document.getElementById("result-question-1-container");
    const resultQuestion1 = document.getElementById("result-question-1");
    const submitButton1 = document.getElementById("question-1-submit");

    const firstArray = [];
    const secondArray = [];

    addButton1.addEventListener("click", (e) => {
        e.preventDefault();
        const number = parseFloat(numberInput1.value);
        if (!isNaN(number) && number > 0) {
            firstArray.push(number);
            updateSubmitButtonState();
            numberInput1.value = "";
            renderNumbers();
        }
    });

    const renderNumbers = () => {
        list1.innerHTML = "";
        firstArray.forEach((number) => {
            const li = document.createElement("li");
            li.textContent = `${number}`;
            list1.appendChild(li);
        });
    }


    addButton2.addEventListener("click", (e) => {
        e.preventDefault();
        const number = parseFloat(numberInput2.value);
        if (!isNaN(number) && number > 0) {
            secondArray.push(number);
            updateSubmitButtonState();
            numberInput2.value = "";
            renderNumbers2();
        }
    });

    const renderNumbers2 = () => {
        list2.innerHTML = "";
        secondArray.forEach((number, index) => {
            const li = document.createElement("li");
            li.textContent = `${number}`;
            list2.appendChild(li);
        });
    }

    submitButton1.addEventListener("click", async (e) =>  {
        e.preventDefault();

        if (firstArray.length === 0 || secondArray.length === 0) {
            return;
        }

        const requestBody = {
            firstArray,
            secondArray
        };

        try {
            const response = await fetch("/api/challenge/smallest-difference", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                const data = await response.json();
                resultQuestion1Container.classList.remove('hidden');
                resultQuestion1.innerHTML = `Result: <strong>${data.response.difference}</strong>`;
            } else {
                console.error("Failed to make POST request.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });

    const updateSubmitButtonState = () => {
        if (firstArray.length === 0 || secondArray.length === 0) {
            submitButton1.disabled = true;
        } else {
            submitButton1.disabled = false;
        }
    }

    updateSubmitButtonState();

    // Question 2
    const coinInput = document.getElementById("coins-input");
    const addCoinButton = document.getElementById("add-coin-button");
    const coinList = document.getElementById("coin-list");


    const resultQuestion2Container = document.getElementById("result-question-2-container");
    const resultQuestion2 = document.getElementById("result-question-2");

    const submitButton2 = document.getElementById("question-2-submit");

    const coins = [];

    addCoinButton.addEventListener("click", (e) => {
        e.preventDefault();
        const number = parseFloat(coinInput.value);
        if (!isNaN(number) && number > 0) {
            console.log('=== script.js [148] ===', number);
            coins.push(number);
            updateSubmitButtonState2();
            coinInput.value = "";
            renderCoins();
        }
    });

    const renderCoins = () => {
        coinList.innerHTML = "";
        console.log('=== script.js [158] ===', coins);
        coins.forEach((number) => {
            const li = document.createElement("li");
            li.textContent = `${number}`;
            coinList.appendChild(li);
        });
    }

    submitButton2.addEventListener("click", async (e) =>  {
        e.preventDefault();

        if (coins.length === 0) {
            return;
        }

        const requestBody = {
            coins,
        };

        try {
            const response = await fetch("/api/challenge/non-constructible-change", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                const data = await response.json();
                resultQuestion2Container.classList.remove('hidden');
                resultQuestion2.innerHTML = `Result: <strong>${data.response}</strong>`;
            } else {
                console.error("Failed to make POST request.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });

    const updateSubmitButtonState2 = () => {
        if (coins.length === 0) {
            submitButton2.disabled = true;
        } else {
            submitButton2.disabled = false;
        }
    }

    updateSubmitButtonState2();
});
