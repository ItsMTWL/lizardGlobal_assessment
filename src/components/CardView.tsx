import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Entry } from "../types/dbTypes";
import "../styles/cardStyle.scss";
import { motion } from 'framer-motion/dist/framer-motion';

function CardView(list: Array<Entry>) {
    return <div>
        {list.map((object: Entry) =>
            Cards(object)
        )}
    </div>
}


// individual cards which represents 1 Json entry 
function Cards(object: Entry) {
    const nextPath = '/Details/' + object.id;

    const animation = {
        initial: { scale: 0 },
        animate: { scale: 1 },
        exit: { scale: 0 }
    }

    return <motion.div {...animation} key={object.id}>
        <Link className="Link" to={nextPath}>
            <Card className="card" key={object.id}>
                <Card.Header className="cardHeader">
                    {object.title}
                </Card.Header>
                <Card.Body className="cardBody">
                    <Card.Text className="cardText">
                        <img src={object.author.avatar} alt={object.author.name}></img>
                        {object.author.name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    </motion.div>
}

export default CardView;