// controllers/problemController.js
const { exec } = require('child_process');
const fs = require('fs');
const util = require('util');
const path = require('path');

const executeCode = async (req, res) => {
  const { code } = req.body;
  const uniqueId = Date.now(); // Unique identifier for the filename

  // Write submitted code to a file
  const filepath = path.join(__dirname, `../temp/${uniqueId}.js`);
  await util.promisify(fs.writeFile)(filepath, code);

  // Execute the code and return the result
  exec(`node ${filepath}`, (error, stdout, stderr) => {
    console.log('stdout:', stdout);
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).json({ error: `Execution error: ${error.message}` });
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).json({ error: `Execution error: ${stderr}` });
    }

    // Clean up: delete the temporary file after execution
    fs.unlink(filepath, unlinkErr => {
      if (unlinkErr) console.error(`Error removing file: ${unlinkErr}`);
    });

    res.json({ output: stdout });
  });
};

module.exports = {
  executeCode
};
