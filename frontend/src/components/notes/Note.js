import Draggable from 'react-draggable'; 
import './note.css';

const Note = ({ title, description }) => {
    return (
        <Draggable>
            <div className="note">
                <h2>title</h2>
                <p>description</p>
            </div>
        </Draggable>
    );
};

export default Note;
