import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice'
import './App.css';
import {Header, Footer} from './components/index'
import { Outlet } from 'react-router-dom';
import { fetchPosts } from './store/postSlice';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); 

  useEffect(()=> {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData})); 
      }else{
        dispatch(logout());
      }
    }).catch((error) => {
      console.log(error)
      console.log(import.meta.env.VITE_APPWRITE_URL)
    })
    .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
          <main>
            <Outlet/>
          </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
