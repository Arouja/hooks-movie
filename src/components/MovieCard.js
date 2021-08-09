import { Card } from "react-bootstrap";
import { PropTypes } from "prop-types";
import Rating from "./Rating";

const MovieCard = ({ title, description, posterUrl, rate }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={posterUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <Rating name="read-only" value={rate} readOnly />
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired
};

export default MovieCard;
