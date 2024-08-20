const Note = require('../../models/note'); // assuming you have a Note model
module.exports = {
    create
};


async function create(req, res) {
    try {
        console.log(req.body)
        await Note.create({
            text: req.body.text,
            user: req.user._id // 
        });
        const notes = await Note.find({user: req.user._id })
        res.json(notes); // Return the created note
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Error creating note' });
    }
}