
import {useEffect} from 'react'
const Home = () => {

  useEffect(()=> {
    document.title = 'Home Instagram'
  },[])
  return(
    <div>Home Page</div>
  )
}

export default Home