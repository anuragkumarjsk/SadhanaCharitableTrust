import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Success() {
const navigate = useNavigate()
 useEffect(() => {
    setTimeout(() => {
        navigate('/')
    }, 1500);
    return () => {
    }
  }, [])
  
  return (
    <div style={{display:'grid',placeItems:'center',height:'100vh',fontFamily:'GTWalsheimPro-Bold',fontSize:'30px'}}>
         Yay! you were registered Successfully.
    </div>
  )
}

export default Success