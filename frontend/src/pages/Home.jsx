import { useState, useEffect } from "react";
import api from "../api";
import "../styles/Home.css";
import Note from "../components/Note";
import { useNavigate } from "react-router-dom";

function Home(){
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getNotes();
    }, []);
    
    const getNotes = () => {
        api
        .get("/api/notes/")
        .then((res) => res.data)
        .then((data) => {
            setNotes(data);
            console.log(data);
        })
        .catch((err) => alert(err));
    };

    const deleteNode = (id) => {
        api
        .delete(`/api/notes/delete/${id}`)
        .then((res) => {
            if (res.status === 204) alert("Note Deletion performed");
            else alert("Failed to Delete the note");
            getNotes();
        }).catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api.post("/api/notes/", { content, title })
        .then((res) => {
            if (res.status === 201) alert("Note Creation performed");
            else alert("Failed to create the note");
            getNotes();
        }).catch((error) => alert(error));
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div>
            <div className="header">
                <h2>Notes</h2>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            {/* to render the notes */}
            {notes.map((note) => 
                <Note note={note} onDelete={deleteNode} key={note.id} />
            )}
            <h3>Create a Note</h3>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title: </label>
                <br />
                <input 
                    type="text"
                    id="title" 
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content: </label>
                <br />
                <textarea
                    id="content" 
                    name="content"
                    required
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                ></textarea>
                <button className="form-button" type="submit">Create Note</button>
            </form>
        </div>
    );
}

export default Home;
