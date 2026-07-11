import {useState} from 'react';
import './index.css'


function NoteItem({note, onDelete, onSummarize}) { 

    const[loading , setLoading] = useState(false);

    const handleLoading =async ()=>{
        setLoading(true);
        await onSummarize(note);
        setLoading(false);
    }

    return(
        <div className="note-item">
            <h2>{note.title}</h2>
            <p>{note.content}</p>

            {
                note.Summary && (<p className="summary"><strong>AI Summary : </strong>{note.Summary}</p>)
            }
            <div className="actions">
                <button className="Summary" onClick ={handleLoading} disabled={loading}>
                    {loading ? 'Summarizing...' : 'Summarize'}
                </button>
                <button  onClick={()=>onDelete(note._id)} className="delete">
                    Delete
                </button>
            </div>




        </div>
    )

}

export default NoteItem;