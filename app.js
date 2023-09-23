const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Define the directory for uploaded files
const uploadDir = './uploads'; // Replace with your desired directory

// Create the directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
   fs.mkdirSync(uploadDir, { recursive: true }); // Use { recursive: true } to create parent directories if they don't exist
}

// Multer middleware for handling file uploads
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
       cb(null, uploadDir);
   },
   filename: (req, file, cb) => {
       const ext = path.extname(file.originalname);
       cb(null, `${Date.now()}${ext}`);
   }
});

const upload = multer({ storage });

// Serve static files from the 'uploaded_files' directory
app.use('/uploads', express.static(uploadDir));

// Define a route for the upload form
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'upload.html'));
});

// Define a route for handling file uploads
app.post('/upload', upload.single('file'), (req, res) => {
   res.send('File Uploaded Sucessfully!<br/>please wait for at least 3 days for upload in the main server');
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
