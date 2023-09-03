// link : https://www.codewars.com/kata/5705601c5eef1fad69000674

function toBytes(n) {
    // Ensure the input is a non-negative integer
    if (typeof n !== 'number' || n < 0 || n % 1 !== 0) {
      throw new Error('Input must be a non-negative integer.');
    }
  
    // Create an empty array to store the bytes
    const bytes = [];
  
    // Continue dividing the integer by 256 until it becomes 0
    while (n > 0) {
      bytes.unshift(n % 256); // Add the remainder as a byte
      n = Math.floor(n / 256); // Update the integer by dividing it
    }
  
    // If no bytes were added (i.e., the input was 0), add a single 0 byte
    if (bytes.length === 0) {
      bytes.push(0);
    }
  
    // Convert the bytes to strings with leading zeros and return them
    return bytes.map(byte => byte.toString(2).padStart(8, '0'));
  }
