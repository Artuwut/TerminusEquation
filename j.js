// Select input fields and result elements
const xInput = document.getElementById("X");
const yInput = document.getElementById("Y");
const zInput = document.getElementById("Z");

const xResult = document.getElementById("xResult");
const yResult = document.getElementById("yResult");
const zResult = document.getElementById("zResult");

// Function to calculate results
function calculateResults() {
    // Parse input values as numbers
    const x = parseFloat(xInput.value) || 0; // Default to 0 if empty
    const y = parseFloat(yInput.value) || 0;
    const z = parseFloat(zInput.value) || 0;

    // Calculate results
    xResult.textContent = 2 * x + 11;
    yResult.textContent = (2 * z + y) - 5;
    zResult.textContent = (y + z) - x;
}

// Add event listeners to input fields
xInput.addEventListener("input", calculateResults);
yInput.addEventListener("input", calculateResults);
zInput.addEventListener("input", calculateResults);
