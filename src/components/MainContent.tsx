import ListGroup from "./ListGroup";
import Button from "./Button"


function MainContent(){
    let items= ['New York','Barcelona','Tokyo','Paris'];
    const handleSelectItem = (item:string) => {
        console.log(item)
    }

    return (
    <>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    <Button color="dark" onClick={() => console.log('Clicked')}>
        My Button
    </Button>
    </>
    )
}

export default MainContent;