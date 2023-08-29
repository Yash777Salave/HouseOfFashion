import React, { useState } from 'react';
import styled from 'styled-components';
import { setWishlist } from '../redux/slice/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { wishlistState } from '../redux/selector/wishlistSelector';
import { useNavigate } from 'react-router-dom';
import { ProductDetail, setProductDetail } from '../redux/slice/productDetailSlice';
import { setRemoveBag } from '../redux/slice/bagSlice';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  setBuyProduct: React.Dispatch<React.SetStateAction<ProductDetail | undefined>>
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Card = styled.div`
  border: 1px solid #ccc;
  padding:  0 16px;
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


const BagProductCard: React.FC<ProductCardProps> = ({ setIsModalOpen,image, title, price, rating,description,setBuyProduct}) => {
  const [showWishlist, setShowWishlist] = useState(false);
  const appDispatch = useDispatch();
  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <Card onMouseEnter={() => setShowWishlist(true)} onMouseLeave={() => setShowWishlist(false)}>
    <div onClick={()=>{ appDispatch(setRemoveBag(title))}} style={{display:'flex',justifyContent:'flex-end',cursor:'pointer'}}>&#10006;</div> 
     <Image src={image} alt={title} />
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
        {showWishlist && <WishlistButton onClick={()=>{
            console.log('clicked')
            setBuyProduct({title:title,description:description,price:price, rating:rating, image:image})
            setIsModalOpen(true);

        }}>Buy Now</WishlistButton>}
    </Card>
  );
};

export default BagProductCard;
