import React, { useState } from "react";
import Draggable from "react-draggable";
import "./note.css";
import editNote from "../../utils/icons/edit-note.svg";

const Note = ({
    initialTitle = "Untitled",
    initialDescription = "No description",
}) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    
    const handleEditNote = () => {
        console.log("Edit note");
    };

    return (
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
            <div className="note bg-[#fa9fba] border rounded-lg shadow-md w-80 min-h-[400px] max-h-[400px] overflow-auto relative font-sans ">
                <div className="flex flex-col h-full">
                    <div className="hover:border-2 hover:rounded-lg hover:border-white border-[#fa9fba] border-2 flex">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="text-xl font-bold border-none bg-transparent outline-none p-2 text-center w-full cursor-pointer  "
                        />
                        <div>
                            <img
                                src={editNote}
                                alt="edit"
                                className="h-7 cursor-pointer"
                                onClick={handleEditNote}></img>
                        </div>
                    </div>
                    <div className="border-2 border-[#fa9fba] hover:border-white rounded-lg hover:opacity-90 h-full">
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full h-full border-none bg-transparent outline-none resize-none text-lg p-2 text-center cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default Note;
