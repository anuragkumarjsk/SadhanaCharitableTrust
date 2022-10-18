import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Failiure() {
const navigate = useNavigate()
 useEffect(() => {
    setTimeout(() => {
        navigate('/')
    }, 2000);
    return () => {
    }
  }, [])
  
  return (
    <div style={{display:'grid',placeItems:'center',height:'100vh',fontFamily:'GTWalsheimPro-Bold',fontSize:'30px'}}>
        Oops ! an error occured.
    </div>
  )
}


export default Failiure