const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true
      },
    content: {
        type: String,
        required: true
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
      },
    
    position: {
    x: {
          type: Number,
          required: true
    },
    y: {
          type: Number,
          required: true
       }
    },
   
    
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Note', NoteSchema);
