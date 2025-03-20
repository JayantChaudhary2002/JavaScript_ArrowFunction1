// Function to validate Indian PIN code
const validatePinCode = (pinCode) => {
    return /^[0-9]\d{5}$/.test(pinCode); // Ensures first character is a digit and total length is 6 digits
};

// Example usage of PIN code validation
console.log(validatePinCode("400088")); // true
console.log(validatePinCode("4008"));   // false
console.log(validatePinCode("4000888")); // false
console.log(validatePinCode("40A088"));  // false
console.log(validatePinCode("A400088")); // false
