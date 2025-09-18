// ===============================================
// 📚✨ Part 2: JavaScript Functions Logic
// ===============================================

// Global variable: accessible everywhere
let globalTaxRate = 0.15; // 15%

// Function 1: Calculates the price after tax
// Demonstrates: Parameters (price), Return Value, and Global Scope usage
function calculateTaxedPrice(basePrice) {
    // Local variable: accessible only within this function
    const taxAmount = basePrice * globalTaxRate; 
    const finalPrice = basePrice + taxAmount;
    return finalPrice;
}

// Function 2: Demonstrates Local vs. Global Scope
// Demonstrates: Scope Awareness (inner variables don't overwrite outer ones)
function scopeDemonstrator(a) {
    // This 'a' is a local parameter, separate from the outer 'a'
    const localVariable = "I am local to scopeDemonstrator.";
    console.log("--- Scope Demonstration ---");
    console.log(`Inside function (Parameter a): ${a}`);
    console.log(`Inside function (Local Variable): ${localVariable}`);
    
    // Attempting to access localVariable outside this function will fail.
    return localVariable;
}

// Global variable used for scope demo
let a = 99;
console.log(`Global variable 'a' before call: ${a}`);
scopeDemonstrator(10); // Pass a different value
console.log(`Global variable 'a' after call: ${a}`); // 'a' remains 99, proving local scope
console.log("---------------------------");


// Event handler for Part 2 button
const priceInput = document.getElementById('priceInput');
const calcButton = document.getElementById('calcButton');
const taxedPriceOutput = document.getElementById('taxedPriceOutput');

calcButton.addEventListener('click', () => {
    const inputPrice = parseFloat(priceInput.value);
    
    if (!isNaN(inputPrice) && inputPrice >= 0) {
        // Reuse Function 1 to calculate the price
        const finalPrice = calculateTaxedPrice(inputPrice);
        taxedPriceOutput.textContent = `$${finalPrice.toFixed(2)}`;
    } else {
        taxedPriceOutput.textContent = 'Invalid Input';
    }
});


// ===============================================
// 🎨🎬 Part 3: Combining CSS Animations with JavaScript
// ===============================================

const triggerAnimationBtn = document.getElementById('triggerAnimationBtn');
const notification = document.getElementById('notification');

// Function 3: Reusable function to manage notification state and trigger CSS animation
// Demonstrates: Reusable logic, parameter usage, and class manipulation for CSS triggering
function toggleNotification(show, message = "Default Message") {
    notification.textContent = message;

    if (show) {
        // 1. Remove the smooth 'hidden-state' transition class
        notification.classList.remove('hidden-state');
        
        // 2. Add the 'show-state' class which triggers the @keyframes animation
        notification.classList.add('show-state');
        
        // 3. Set a timeout to automatically reverse the animation after 3 seconds
        setTimeout(() => {
            toggleNotification(false); // Call itself to hide
        }, 3000); 

    } else {
        // Reverse the process to hide
        notification.classList.remove('show-state');
        
        // Use a slight delay before adding the 'hidden-state' to let the 'show-state' finish
        setTimeout(() => {
            // 4. Add the 'hidden-state' class, relying on CSS transition for smooth fade-out
            notification.classList.add('hidden-state');
        }, 50); // 50ms delay
    }
}


// Event handler for Part 3 button
triggerAnimationBtn.addEventListener('click', () => {
    // Trigger the notification using the reusable function
    toggleNotification(true, "Animation started! Fading in...");
});