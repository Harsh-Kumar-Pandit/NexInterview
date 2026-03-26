import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import { useUser } from '@clerk/react'
import { Toaster } from 'react-hot-toast';
import ProblemPage from './pages/ProblemPage';
import Dashboard from './pages/Dashboard';
import DemoPage from './pages/Demopage';
import ProblemIdpage from './pages/ProblemIdpage';

function App() {

  const {isSignedIn, isLoaded} = useUser(); 

  // this will get rid from flickering effect
  if (!isLoaded) return null;

  return (
    <>
    <Routes>
      <Route path='/' element={!isSignedIn ? <HomePage/> : <Navigate to={"/dashboard"}/>}/>
      <Route path='/dashboard' element={isSignedIn ? <Dashboard/> : <Navigate to={'/'}/>}/>
      <Route path='/problems' element={<ProblemPage/>}/>
      <Route path='/problems/:id' element={<ProblemIdpage/>}/>
      <Route path='/demo' element={ <DemoPage/>}/>
    </Routes>
    <Toaster toastOptions={{duration: 2000}}/>
    </>
  )
}

export default App
