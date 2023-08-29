import React, { useState } from 'react';
import styled from 'styled-components';
import { setRemoveWishlist, setWishlist } from '../redux/slice/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { wishlistState } from '../redux/selector/wishlistSelector';
import { useNavigate } from 'react-router-dom';
import { setProductDetail } from '../redux/slice/productDetailSlice';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  isCloseVisible:boolean;
}

type CardType={
  paddingChannge:boolean;
}
const Card = styled.div<CardType>`
  border: 1px solid #ccc;
  padding: ${(paddingChannge)=>(paddingChannge ? "16px" : " 0 16px")};
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 450px;
  border-radius:8px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
max-width: 100%;
max-height: 70%;
  width:300px;
  transition: max-height 0.3s;
  ${Card}:hover & {
    overflow:hidden;
  }
`;

const Title = styled.h2`
  margin: 8px 0;
  font-size: 16px;
  font-weight:600;
  display:-webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient:vertical;
  overflow:hidden;
  white-space:normal;
  text-overflow:ellipsis;
`;

const Price = styled.p`
  font-size: 1rem;
  margin: 4px 0;
`;

const Rating = styled.div`
  color: #f39c12;
  margin: 8px 0;
`;

const WishlistButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;


const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, rating,isCloseVisible,description}) => {
  const [showWishlist, setShowWishlist] = useState(false);
  const wishlist = useSelector(wishlistState);
  const appDispatch = useDispatch();
  const navigate = useNavigate();
  console.log('wishlist', wishlist)
console.log('isCloseVisible', isCloseVisible)

  return (
    <Card paddingChannge={isCloseVisible} onMouseEnter={() => setShowWishlist(true)} onMouseLeave={() => setShowWishlist(false)}>
     {isCloseVisible && <div onClick={()=>{ appDispatch(setRemoveWishlist(title))}} style={{display:'flex',justifyContent:'flex-end',cursor:'pointer'}}>&#10006;</div>} <Image onClick={()=>{  appDispatch(setProductDetail({title:title,rating:rating,price:price,image:image,description:description}))
    navigate("/product-detail")}} src={image} alt={title} />
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Rating>
      <div className="product-rating">
        {Array.from({ length: rating }, (_, index) =>{ 
          return(
          <span key={index} className="star">&#9733;</span>
        )}
        )}
      </div>
        </Rating>
        {!isCloseVisible && showWishlist && <WishlistButton onClick={()=>{
            console.log('clicked')
            appDispatch(setWishlist([{title:title,price:price,rating:rating,image:image,description:description}]))
        }}>Add to Wishlist</WishlistButton>}
    </Card>
  );
};

export default ProductCard;
