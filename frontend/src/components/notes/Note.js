import React, { useState } from "react";
import Draggable from "react-draggable";
import "./note.css";
import editNote from "../../utils/icons/edit-note.svg";

const Note = ({
    initialTitle = "Untitled",
    initialDescription = "No description",
    style = {},
}) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    
    const handleEditNote = () => {
        console.log("Edit note");
    };

    return (
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
            <div className="note" style={style}>
                <div className="flex flex-col h-full ">
                    <div className="hover:border-2 hover:border-white border-[#0000] border-2 rounded-lg flex ">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="text-xl font-bold border-none bg-transparent outline-none p-2 text-center w-full cursor-pointer"
                        />
                        <div>
                            <img
                                src={editNote}
                                alt="edit"
                                className="h-7 cursor-pointer"
                                onClick={handleEditNote}
                            />
                        </div>
                    </div>
                    <div className="w-full h-[2px] bg-black">

                    </div>
                    <div className="border-2 border-[#0000] hover:border-white hover:opacity-90 h-full rounded-lg">
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
