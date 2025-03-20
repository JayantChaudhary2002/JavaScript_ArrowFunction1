// Function to validate Indian PIN code
const validatePinCode = (pinCode) => {
    return /^[0-9]\d{5}$/.test(pinCode) && !/[^0-9]$/.test(pinCode); // Ensures first character is a digit, exactly 6 digits long, and no non-numeric characters at the end
};

// Example usage of PIN code validation
console.log(validatePinCode("400088")); // true
console.log(validatePinCode("4008"));   // false
console.log(validatePinCode("4000888")); // false
console.log(validatePinCode("40A088"));  // false
console.log(validatePinCode("A400088")); // false
console.log(validatePinCode("400088B")); // false
