const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Comments.database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Schema aur Model
const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
});

const Message = mongoose.model('Message', MessageSchema);

// POST route - messages save karne ke liye
app.post('/api/messages', async (req, res) => {
    const { name, email, phone, message } = req.body;
    const newMessage = new Message({ name, email, phone, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message saved successfully' });
});

// GET route - messages fetch karne ke liye
app.get('/api/messages', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
