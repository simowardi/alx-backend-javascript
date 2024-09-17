/**
 * 1-stdin.js - Interactive program to get user's name and display messages
 * 
 * This program prompts the user for their name, displays it, and shows a
 * closing message when the program ends. It uses process.stdin and process.stdout
 * for input and output operations.
 */

// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for data on stdin
process.stdin.on('readable', () => {
  // Read the chunk of data
  const chunk = process.stdin.read();
  if (chunk !== null) {
    // Remove the newline character from the input
    const name = chunk.toString().trim();
    // Display the user's name
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

// Listen for the 'end' event on stdin
process.stdin.on('end', () => {
  // Display the closing message
  process.stdout.write('This important software is now closing\n');
});
