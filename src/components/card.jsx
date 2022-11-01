import React from "react";
import BooststrapCard from 'react-bootstrap/Card';

function Card(props) {
    return (
        <div>
            <BooststrapCard style={{ width: '18rem' }}>
        <BooststrapCard.Img variant="top" src={props.imagen} />
        <BooststrapCard.Body>
          <BooststrapCard.Title>{props.titulo}</BooststrapCard.Title>
          <BooststrapCard.Text>
            {props.descripcion}
          </BooststrapCard.Text>
        </BooststrapCard.Body>
      </BooststrapCard></div>
    )
}

export default Card