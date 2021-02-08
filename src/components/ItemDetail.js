import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Button, Icon, Divider, Header, Image, Grid} from "semantic-ui-react";

const ItemDetail = ({ id, title, price, image, description, stock }) => {
  const [cant, setCant] = useState(0);

  const myContext = useContext(CartContext);

  const onAdd = (counter) => {
    setCant(counter);
    myContext.addItem({ item: { id, title, price, image }, quantity: counter });
  };

  const renderButtons = (cant) => {
    return cant === 0 ? (
      <ItemCount stock={stock} initial={1} onAdd={onAdd} />
    ) : (
      <Button animated='vertical' as={Link} to={"/cart"} color="teal" size="huge">
        <Button.Content hidden>Carrito</Button.Content>
        <Button.Content visible>
          <Icon name='shop' />
        </Button.Content>
      </Button>
    );
  };

  return (
    <Grid columns={2}>
        <Grid.Row>
            <Grid.Column floated="left">
                <Image src={image} ui={false} className="itemDetailImage"/>
            </Grid.Column>
            <Grid.Column floated="right">
                <Header textAlign="center" as="h2">{title}</Header>
                <Header sub>Precio</Header>
                <span>$ {price}</span>
                <Header sub>Descripción</Header>
                <p>{description}</p>
                <Divider/>
                {renderButtons(cant)}
            </Grid.Column>
        </Grid.Row>
    </Grid>
  );
};

export default ItemDetail;
