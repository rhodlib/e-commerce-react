import React from "react";
import {Link} from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'

const Item = ({ id, title, price, image }) => (
  <Card as={Link} to={`/item/${id}`} centered color="teal"  className="cardItem">
    <Image src={image} ui={false} className="cardImage"/>
    <Card.Content className="cardContent">
      <Card.Header>{title}</Card.Header>
      <Card.Description>
        <span>$</span>{price}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default Item
