import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// API route for resume evaluation
app.post('/evaluate', (req, res) => {
    const resumeData = req.body;
    // TODO: Implement resume evaluation logic
    res.json({ message: 'Resume evaluation received', data: resumeData });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});