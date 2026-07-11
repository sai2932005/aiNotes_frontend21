
import {useState} from 'react';

import './index.css'

function NoteForm({onAdd}){
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        if(!title.trim() || !content.trim()) return 
        onAdd({title,content});
        setTitle('');
        setContent('')

    }

    return(
        <div className="note-form-container">
        <form onSubmit={handleSubmit} className="note-form">
            <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            <textarea placeholder="Content" onChange={(e)=>setContent(e.target.value)} value={content}></textarea>
            <button type="submit">Save Note</button>
        </form>
        </div>
    )

}

export default NoteForm;