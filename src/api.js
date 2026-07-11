


const Base = `${import.meta.env.VITE_API_URL}/api/notes`;


const authHeaders = () =>({
    'Content-Type':'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}` 
})

export const getNotes = async()=>{
    const res = await fetch(Base , {
        headers : authHeaders()
    });

    const data = await res.json();
    console.log("Status:", res.status);
    console.log("Response:", data);





    if(!res.ok){
        throw new Error('Failed to fetch notes');
    }       
    return data ;
}

export const createNote = async(note)=>{
    const res = await fetch(Base,{
        method:'POST',
        headers: authHeaders(),
        body:JSON.stringify(note)
    })  
    return res.json();
        }

    
export const deleteNote = async(id)=>{
    const res = await fetch(`${Base}/${id}`,{
        method:"DELETE",
        headers: authHeaders()

    })
    return res.json();
}

export const summarizeNote = async(id)=>{
    const res = await fetch(`${Base}/${id}/summarize`,{
        method:"POST",
        headers: authHeaders()

    })
    return res.json();
}

//Auth api calls 
export const registerUser = async(email,password) =>{
    const res  = await fetch("/api/auth/register" ,{
        method :"POST",
        headers :{'Content-Type' : "application/json"},
        body : JSON.stringify({email,password})
    })

    return res.json() ;
}

export const loginUser = async (email,password) =>{
    const res = await fetch("/api/auth/login" ,{
        method:"POST",
        headers :{"Content-Type": "application/json"},
        body : JSON.stringify({email,password})
    })
     
    return res.json() ;
}