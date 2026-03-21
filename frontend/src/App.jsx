import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import { useUser } from '@clerk/react'
import { Toaster } from 'react-hot-toast';

function App() {

  const {isSignedIn} = useUser(); 

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/problems' element={isSignedIn ? <ProblemPage/> : <Navigate to={'/'}/>}/>
    </Routes>
    <Toaster toastOptions={{duration: 2000}}/>
    </>
  )
}

export default App
