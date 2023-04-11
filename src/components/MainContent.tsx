import ListGroup from "./ListGroup";
import Button from "./Button"
import Alert from "./Alert";
import { useState, useEffect, useRef } from "react";


function MainContent(){
    let items= ['New York','Barcelona','Tokyo','Paris'];
    const handleSelectItem = (item:string) => {
        console.log(item)
    }
    const [alertVisible, setAlertVisibility] = useState(true)
    const [name, setName] = useState('')
    const prevName = useRef('')

useEffect(()=>{
    prevName.current= name

,[name]})
    return (
    <>
{    alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>Only a few cities are currently displayed, more coming soon!</Alert>
}    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />

    <br></br>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <div>My name is {name} and it used to be {prevName.current}</div>
    <button onClick={focus}>Focus</button>

    </>
    )
}

export default MainContent;