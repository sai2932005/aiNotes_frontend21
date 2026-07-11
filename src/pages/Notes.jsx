import { useNavigate } from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io";
import NoteForm from '../components/NoteForm/NoteForm.jsx'
import NoteList from '../components/NoteList/NoteList.jsx'
import {getNotes , createNote, deleteNote , summarizeNote} from '../api.js'
import {useEffect, useState} from 'react'
import './Notes.css'

function NotesDetail() {
  const [notes,setNotes] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchNotes = async()=>{
      const data = await getNotes();
      setNotes(data);
    }
    fetchNotes();
  } ,[])

  const handleAddNote = async(note)=>{
    const data = await createNote(note);
    setNotes([...notes,data]);

  }
  
  const handleDeleteNote = async(id)=>{
    await deleteNote(id);
    setNotes(notes.filter((note)=> note._id !== id));
  }

  const handleSummarizeNote = async(note)=>{
    const data = await summarizeNote(note._id); 
    setNotes((prevNotes) => prevNotes.map((n) => n._id === note._id ? data : n));

  }

  const handleNote = (note) => {
    console.log("note added",note)
  }
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login') ;
  }
  

  return (
    <div className = "App">
      <div className='nav_bar'>
        <h1>Notes App</h1>
        <button className="logOut-btn" onClick = {handleLogout}>
          <IoIosLogOut size={17}/>
          <span className="logout-text">Logout</span></button> 
        
      </div>
      <NoteForm onAdd={handleAddNote}/>
      <NoteList notes={notes} onDelete ={handleDeleteNote} onSummarize={handleSummarizeNote}/>
    </div>
  )
}

export default NotesDetail ;