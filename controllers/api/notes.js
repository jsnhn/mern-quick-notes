const Note = require('../../models/note'); // assuming you have a Note model
module.exports = {
    index,
    create,
    delete: deleteNote,
};


async function index(req, res) {
    const notes = await Note.find({})
    res.json(notes);
}

async function create(req, res) {
    try {
        await Note.create({
            text: req.body.text,
            user: req.user._id // 
        });
        const notes = await Note.find({user: req.user._id })
        res.json(notes); // Return the all of the user notes
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Error creating note' });
    }
}

async function deleteNote(req, res) {
    try {
        await Note.deleteOne({ _id: req.params.id });

        const notes = await Note.find({user: req.user._id })
        res.json(notes); // Return the all of the user notes
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Error deleting note' });
    }
}