// Function to handle button clicks
function pressKey(key) {
    document.getElementById("screen").value += key;
}

// Function to clear screen
function clearScreen() {
    document.getElementById("screen").value = "";
}

// Function to evaluate expression
function calculate() {
    let expression = document.getElementById("screen").value;
    try {
        let result = eval(expression);
        document.getElementById("screen").value = expression + " = " + result; // Show full expression
    } catch {
        document.getElementById("screen").value = "Error";
    }
}

// Voice Recognition Feature
document.getElementById("voiceInput").addEventListener("click", function () {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.onresult = function (event) {
        let voiceInput = event.results[0][0].transcript;
        
        // Convert voice commands into math symbols
        let processedInput = voiceInput.toLowerCase()
            .replace("plus", "+")
            .replace("minus", "-")
            .replace("multiply", "*")
            .replace("divide", "/");

        // Show voice input on screen before calculation
        document.getElementById("screen").value = processedInput;

        try {
            let result = eval(processedInput);
            document.getElementById("screen").value = processedInput + " = " + result; // Show full calculation
        } catch (error) {
            document.getElementById("screen").value = "Error";
        }
    };

    recognition.start();
});
