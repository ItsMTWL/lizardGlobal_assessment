import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useLocation } from "react-router-dom";

// Collection of multiple cards which makes up the list 
function CardView(list) {
    return <div>
        {list.map((object) =>
            Cards(object)
        )}
    </div>
}

// indivisual cards which represents 1 Json entry 
function Cards(object) {
    const location = useLocation();
    const nextPath = '/Details/' + object.id;
     
    return <Link to={{pathname:nextPath, state:{ prevPath:location.pathname}}}>
        <Card border="dark">
        <Card.Header>
            {object.title}
        </Card.Header>
        <Card.Body>
            <Card.Text>
                <img src={object.author.avatar} alt={object.author.name}></img>
                {object.author.name}
            </Card.Text>
        </Card.Body>
    </Card>
    </Link>
}

export default CardView;