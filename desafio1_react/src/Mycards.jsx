import Card from "react-bootstrap/Card";
import Boton from './Tags';
import "./App.css";

const MyCard = ({image, title, text, colorButton, textButton}) => {
  return (
    <>
      <Card style={{ width: "18rem"}}>
        <Card.Img
          variant="top"
          src={image}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Boton colorButton={colorButton} textButton={textButton}/>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;
