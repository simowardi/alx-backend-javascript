/**
 * 5-http.js - Complex HTTP Server with Student Data
 *
 * This script creates an HTTP server using Node.js http module.
 * It responds differently based on the URL path and can display student data from a CSV file.
**/

const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;
const HOST = 'localhost';


/**
 * Counts the number of students in different fields from a CSV file asynchronously.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<string>} A promise that resolves with the formatted student data.
 * @throws {Error} Throws an error if the database cannot be loaded.
**/
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);

    let output = `Number of students: ${students.length}\n`;

    const fields = {};
    students.forEach(student => {
      const [firstName, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = { count: 0, students: [] };
      }
      fields[field].count += 1;
      fields[field].students.push(firstName);
    });

    for (const [field, data] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${data.count}. List: ${data.students.join(', ')}\n`;
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}


const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const studentsData = await countStudents(process.argv[2]);
      res.end(studentsData);
    } catch (error) {
      res.statusCode = 404;
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

module.exports = app;
