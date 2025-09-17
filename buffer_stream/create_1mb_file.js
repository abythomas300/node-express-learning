const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '1MB_text_file.txt');

const targetSize = 1 * 1024 * 1024;  // 1 mb = 1024 * 1024 bytes
const content = 'A'.repeat(targetSize);  // Fill the file with 'A' characters, 1 letter is 1 byte

// Write the content to the file
fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.error('Error writing the file:', err);
    } else {
        console.log(`1MB text file successfully created at ${filePath}`);
    }
});
