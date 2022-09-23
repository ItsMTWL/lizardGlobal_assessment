import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import {Entry} from "../types/dbTypes"

// Collection of multiple cards which makes up the list 
function CardView(list:Array<Entry>) {
    return <div>
        {list.map((object) =>
            Cards(object)
        )}
    </div>
}

// indivisual cards which represents 1 Json entry 
function Cards(object: Entry) {
    const nextPath = '/Details/' + object.id;
     
    return <Link to={nextPath}>
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