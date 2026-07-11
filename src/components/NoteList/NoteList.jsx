
import NoteItem from '../NoteItem/NoteItem.jsx'
import './index.css'
function NoteList({notes, onDelete, onSummarize}){

    if(!notes.length){
        return <div className="empty">No Notes Available , Add one Above</div>
    }
    console.log(notes) ;

    return(
        <div className="note-list">
            {notes.map((note) =>( 
                <NoteItem key ={note._id} note={note} onDelete={onDelete} onSummarize={onSummarize}/>

            ))

            }


        </div>
    )


}

export default NoteList;