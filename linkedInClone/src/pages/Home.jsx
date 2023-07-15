
import React,{useState,useEffect} from 'react'
import {HomeComponent,Loader} from '../components'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'


const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth,(res) => {
      if(!res?.accessToken){
        navigate('/login')
      }else{
        setLoading(false)
      }
    })
  },[])
  return (
    <div>
      {
        loading ? <Loader/> : <HomeComponent/>
      }
    </div>
  )
}

export default Home