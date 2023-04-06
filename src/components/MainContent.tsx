import ListGroup from "./ListGroup";
import Button from "./Button"
import Alert from "./Alert";
import { useState } from "react";


function MainContent(){
    let items= ['New York','Barcelona','Tokyo','Paris'];
    const handleSelectItem = (item:string) => {
        console.log(item)
    }
    const [alertVisible, setAlertVisibility] = useState(false)

    return (
    <>
{    alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>
}    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />

    </>
    )
}

export default MainContent;