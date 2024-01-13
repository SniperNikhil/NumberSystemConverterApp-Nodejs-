const socket = io();

function reset() {
    location.reload()
}

document.getElementById("Calculate").addEventListener("click", function () {
    var selectedOption = document.getElementById("enteredWordOutput");
    var selectedIndex = selectedOption.selectedIndex;
    var selectedContent = selectedOption.options[selectedIndex].text;

    var selectedOption1 = document.getElementById("outputunit");
    var selectedIndex1 = selectedOption1.selectedIndex;
    var selectedContent1 = selectedOption1.options[selectedIndex1].text;

    if (selectedContent === "Select") {
        alert("Please Select a Base")
    } else {
        const inputvalue = document.getElementById("inputvalue");
        if (inputvalue.value == "") {
            alert("Please Enter Some Value in Input Field")
        } else {
            socket.emit('calculate', selectedContent, inputvalue.value, selectedContent1)
        }
    }
});

socket.on("conversionResultOfAll", (result) => {
    console.log(Object.keys(result).length);

    const outputContainer = document.getElementById('outputdisplay');
    outputContainer.innerHTML = '';

    if (result == "Invalid input. Please provide a valid number and its base.") {
        const outputValue = result;
        const div = document.createElement('div');
        div.innerHTML = `<strong>${outputValue}</strong> `;
        div.id = "categoryOutput";
        outputContainer.appendChild(div);
    } else {
        for (const unit in result) {
            if (result.hasOwnProperty(unit)) {
                const outputValue = result[unit];

                const div = document.createElement('div');

                div.innerHTML = `<strong>${outputValue} ( ${unit} )</strong> `;
                div.id = "categoryOutput"
                outputContainer.appendChild(div);
            }
        }
    }
});


socket.on("Error", (error) => {
    alert(error)
})

function validate(input) {
    var selectedOption = document.getElementById("enteredWordOutput");
    var selectedIndex = selectedOption.selectedIndex;
    var selectedContent = selectedOption.options[selectedIndex].text;

    if (selectedContent == "Decimal" || selectedContent == "base 10") {
        console.log("wo")
        // Remove any non-numeric and non-decimal point characters
        let sanitizedValue = input.value.replace(/[^0-9.]/g, '');

        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid decimal number");
        }

        // Check if the sanitized value is a valid decimal
        if (/^-?\d*\.?\d*$/.test(sanitizedValue)) {
            // Update the input value with the sanitized value
            input.value = sanitizedValue;
        } else {
            // If not a valid decimal, clear the input value
            input.value = '';
        }
    } else if (selectedContent == "Binary" || selectedContent == "base 2") {
        // Remove any non-binary characters (remove everything except 0 and 1)
        let sanitizedValue = input.value.replace(/[^01]/g, '');

        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid binary number (0 or 1).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue;
    } else if (selectedContent == "Octal" || selectedContent == "base 8") {
        // Remove any non-octal characters (remove everything except 0-7)
        let sanitizedValue = input.value.replace(/[^0-7]/g, '');

        // Check if the original value is different from the sanitized value (non-octal characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid octal number (0-7).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue;
    } else if (selectedContent == "Hexadecimal" || selectedContent == "base 16") {
        // Remove any non-hexadecimal characters (remove everything except 0-9, A-F, a-f)
        let sanitizedValue = input.value.replace(/[^0-9A-Fa-f]/g, '');

        // Check if the original value is different from the sanitized value (non-hexadecimal characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid hexadecimal number (0-9, A-F, a-f).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue.toUpperCase();
    } else if (selectedContent == "Base 24") {
        // Remove any non-base-24 characters (remove everything except 0-9, A-Q, a-q)
        let sanitizedValue = input.value.replace(/[^0-9A-Qa-q]/g, '');

        // Check if the original value is different from the sanitized value (non-base-24 characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid base-24 number (0-9, A-Q, a-q).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue.toUpperCase();
    } else if (selectedContent == "base 3") {
        // Remove any non-base-3 characters (remove everything except 0-2)
        let sanitizedValue = input.value.replace(/[^0-2]/g, '');

        // Check if the original value is different from the sanitized value (non-base-3 characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid base-3 number (0-2).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue;
    } else if (selectedContent == "base 4") {
        // Remove any non-base-4 characters (remove everything except 0-3)
        let sanitizedValue = input.value.replace(/[^0-3]/g, '');

        // Check if the original value is different from the sanitized value (non-base-4 characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid base-4 number (0-3).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue;
    } else if (selectedContent == "base 5") {
        // Remove any non-base-5 characters (remove everything except 0-4)
        let sanitizedValue = input.value.replace(/[^0-4]/g, '');

        // Check if the original value is different from the sanitized value (non-base-5 characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid base-5 number (0-4).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue;
    } else if (selectedContent == "base 6") {
        // Remove any non-base-6 characters (remove everything except 0-5)
        let sanitizedValue = input.value.replace(/[^0-5]/g, '');

        // Check if the original value is different from the sanitized value (non-base-6 characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid base-6 number (0-5).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue;
    } else if (selectedContent == "base 7") {
        // Remove any non-base-7 characters (remove everything except 0-6)
        let sanitizedValue = input.value.replace(/[^0-6]/g, '');

        // Check if the original value is different from the sanitized value (non-base-7 characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid base-7 number (0-6).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue;
    } else if (selectedContent == "base 9") {
        // Remove any non-base-9 characters (remove everything except 0-8)
        let sanitizedValue = input.value.replace(/[^0-8]/g, '');

        // Check if the original value is different from the sanitized value (non-base-9 characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid base-9 number (0-8).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue;
    } else if (selectedContent == "base 11") {
        // Remove any non-base-11 characters (remove everything except 0-9, A)
        let sanitizedValue = input.value.replace(/[^0-9A]/gi, '');

        // Check if the original value is different from the sanitized value (non-base-11 characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid base-11 number (0-9, A).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue.toUpperCase();
    } else if (selectedContent == "base 12") {
        // Remove any non-base-12 characters (remove everything except 0-9, A, B)
        let sanitizedValue = input.value.replace(/[^0-9AB]/gi, '');

        // Check if the original value is different from the sanitized value (non-base-12 characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid base-12 number (0-9, A, B).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue.toUpperCase();
    } else if (selectedContent == "base 13") {
        // Remove any non-base-13 characters (remove everything except 0-9, A, B, C)
        let sanitizedValue = input.value.replace(/[^0-9ABC]/gi, '');

        // Check if the original value is different from the sanitized value (non-base-13 characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid base-13 number (0-9, A, B, C).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue.toUpperCase();
    } else if (selectedContent == "base 14") {
        // Remove any non-base-14 characters (remove everything except 0-9, A, B, C, D)
        let sanitizedValue = input.value.replace(/[^0-9ABCD]/gi, '');

        // Check if the original value is different from the sanitized value (non-base-14 characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid base-14 number (0-9, A, B, C, D).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue.toUpperCase();
    } else if (selectedContent == "base 15") {
        // Remove any non-base-15 characters (remove everything except 0-9, A, B, C, D, E)
        let sanitizedValue = input.value.replace(/[^0-9ABCDE]/gi, '');

        // Check if the original value is different from the sanitized value (non-base-15 characters were removed)
        if (input.value !== sanitizedValue) {
            // Display an alert for invalid input
            alert("Please enter a valid base-15 number (0-9, A, B, C, D, E).");
        }

        // Update the input value with the sanitized value
        input.value = sanitizedValue.toUpperCase();
    }
}