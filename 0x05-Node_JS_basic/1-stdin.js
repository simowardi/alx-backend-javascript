/**
 * 1-stdin.js - Interactive program to get user's name and display messages
 *
 * This program prompts the user for their name, displays it, and shows a
 * closing message when the program ends. It uses process.stdin and process.stdout
 * for input and output operations.
**/

process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('data', (msg) => {
    process.stdout.write(`Your name is: ${msg.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (msg) => {
    process.stdout.write(`Your name is: ${msg.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
