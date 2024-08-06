import React, { useState } from "react";
import Draggable from "react-draggable";
import "./note.css";
import editNote from "../../utils/icons/edit-note.svg";

const Note = ({
    id,
    initialTitle = "Untitled",
    initialDescription = "No description",
    style = {},
    isHighlighted = false,
}) => {
    const [title] = useState(initialTitle); // Title is now read-only
    const [description] = useState(initialDescription); // Description is now read-only

    const handleEditNote = () => {
        console.log("Edit note");
    };

    return (
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
            <div className={`note cursor-pointer ${isHighlighted ? 'highlighted' : ''}`} style={style}>
                <div className="flex flex-col h-full cursor-pointer">
                    <div className="hover:border-2 hover:border-white border-[#0000] border-2 rounded-lg flex font-roboto">
                        <div
                            className="text-xl font-bold border-none bg-transparent outline-none p-2 text-center w-full cursor-pointer"
                        >
                            {title}
                        </div>
                        <div>
                            <img
                                src={editNote}
                                alt="edit"
                                className="h-7 cursor-pointer"
                                onClick={handleEditNote}
                            />
                        </div>
                    </div>
                    <div className="w-full h-[2px] bg-black"></div>
                    <div className="border-2 border-[#0000] hover:border-white hover:opacity-90 h-full rounded-lg">
                        <div
                            className="w-full h-full border-none bg-transparent outline-none resize-none text-lg p-2 text-left"
                        >
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default Note;
