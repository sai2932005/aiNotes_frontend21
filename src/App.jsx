
import {Route,Routes,BrowserRouter ,Navigate} from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import NotesPage from './pages/Notes.jsx'
import RegisterPage from './pages/register.jsx' 


function App(){
    const ProtectedRoute = ({children}) =>{
        const token = localStorage.getItem('token') ;
        return token ? children : <Navigate to="/login"/> ;



    }
    

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path = "/notes" element = {<ProtectedRoute> <NotesPage/> </ProtectedRoute> }/> 
            <Route path="*" element={<Navigate to="/login"/>} /> 

        </Routes>
        
        
        
        </BrowserRouter>
    )
}



export default App
