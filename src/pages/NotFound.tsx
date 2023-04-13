import { useEffect } from 'react';
import  Header  from "../components/Header"
import  Footer  from "../components/Footer"
import { useNavigate } from "react-router-dom"

export function NotFound() {
    const navigate = useNavigate()

    useEffect(()=> {
    setTimeout(()=> {
        navigate("/")
    }, 1500)
}, [])
return (
        <>
        <Header />
            <img height="670px" src="../assets/not-found.jpg" alt="Page not found img"  />
            <br /><br /><br />
\        <Footer />
        </>
    )
}