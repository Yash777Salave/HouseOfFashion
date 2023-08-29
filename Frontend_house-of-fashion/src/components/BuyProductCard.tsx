import React from 'react';
import styled from 'styled-components';
import { Div } from './common/Div';
import { Typography } from './common/Typography';

interface Product {
  title: string;
  price: number;
  description: string;
  shipDate: string;
  address:string
}


const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const Description = styled.p`
  margin-bottom: 12px;
`;

const ShipDate = styled.p`
  font-style: italic;
`;

const BuyProductCard: React.FC<Product> = ({ title,price,description,shipDate,address }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Price>${price.toFixed(2)}</Price>
      <Description>{description}</Description>
      <Div display={'flex'}>
        <Typography>Shipping Address : </Typography>
        <Typography>{address}</Typography>
      </Div>
      <ShipDate>Available for shipping on {shipDate}</ShipDate>
    </Card>
  );
};

export default BuyProductCard;
