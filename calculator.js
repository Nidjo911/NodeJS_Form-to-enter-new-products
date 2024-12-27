// Global variable for temporary memory storage
let tempMemory = {
    poles: 0,
    percentage: 0,
    contacts: 0
};

function calcNumberOfSpaces(poles, percentage) {
    switch(true) {
        case poles <= 0:
            return "Error: poles must be positive";
        case percentage < 0:
            return "Error: percentage can't be negative";
        case percentage > 100:
            return "Error: percentage can't exceed 100";
        default:
            return Math.round(poles * (percentage / 100));
    }
}

// Function to save values in temporary memory
function saveToMemory(poles, percentage, contacts) {
    tempMemory.poles = poles;
    tempMemory.percentage = percentage;
    tempMemory.contacts = contacts;
}

/* check temporary values */

// Function to check current memory values
function checkMemory() {
    console.log("Current memory values:");
    console.log("Poles:", tempMemory.poles);
    console.log("Percentage:", tempMemory.percentage);
    console.log("Contacts:", tempMemory.contacts);
}