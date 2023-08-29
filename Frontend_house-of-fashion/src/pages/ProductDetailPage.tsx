import React, { useState } from 'react';
import styled from 'styled-components';
import { Div } from '../components/common/Div';
import { CenterPage, PageWindow, The1440Window } from '../components/styled/pages.styles';
import { productDetailState } from '../redux/selector/productDetailSelector';
import { useDispatch, useSelector } from 'react-redux';
import { ProductDetail } from '../redux/slice/productDetailSlice';
import { Typography } from '../components/common/Typography';
import "../components/styled/Modal.css"
import { Input } from '../components/common/Input';
import { useSaveBuyProductMutation } from '../redux/service/BuyProduct';
import { useNavigate } from 'react-router-dom';
import { setBag } from '../redux/slice/bagSlice';
interface ProductDetailProps {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
}

//   flex-direction: column;
//   align-items: center;
const ProductDetailContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
`;

const ProductName = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

//   width: 100%;
// max-height: 500px;
const ProductImage = styled.img`
  object-fit: cover;
  margin-bottom: 20px;
  max-width: 100%;
    max-height: 70%;
    width: 300px;
`;

const ProductAttributes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const AttributeLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const AttributeValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const AttributeValue = styled.span<{ isSelected: boolean }>`
  font-size: 14px;
  background-color: ${({ isSelected }) => (isSelected ? '#007bff' : '#f0f0f0')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#0056b3' : '#d0d0d0')};
  }
`;

const BuyNowButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const productDetails: ProductDetailProps = {
  id: '1',
  name: 'Sample Product',
  price: 49.99,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  images: [
    '/jpg/shirt1.jpg',
    '/jpg/shirt2.jpg',
    '/jpg/shirt3.jpg',
  ],
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Red', 'Blue', 'Green'],
};
const ProductDetailPage: React.FC = () => {
    const productDetail = useSelector(productDetailState);
    const appDispatch = useDispatch();
    const navigate = useNavigate();
    
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    
    const handleSizeClick = (size: string) => {
      setSelectedSize(size === selectedSize ? null : size);
    };
    
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const closeModal = () => {
  //     setIsModalOpen(false);
  //   };

  // const handleBuyNow = () => {
  //   setIsModalOpen(true);
  // };

  return (
    <PageWindow mt={'0px'}>
    <The1440Window>
      <CenterPage>
    <ProductDetailContainer>
        <Div>
        <ProductImage src={productDetail.image} alt={""} />
        </Div>
        <Div marginLeft={'50px'}>
        <ProductName>{productDetail.title}</ProductName>
        <ProductPrice>${productDetail.price}</ProductPrice>
        <ProductDescription>{productDetail.description}</ProductDescription>
        <ProductAttributes>
          <AttributeLabel>Sizes:</AttributeLabel>
          <AttributeValues>
            {productDetails.sizes.map((size) => (
              <AttributeValue
                key={size}
                isSelected={size === selectedSize}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </AttributeValue>
            ))}
          </AttributeValues>
        </ProductAttributes>
        <BuyNowButton onClick={()=>{
          appDispatch(setBag([{title:productDetail.title,price:productDetail.price,rating:productDetail.rating,image:productDetail.image,description:productDetail.description}]))
          navigate("/bag")
          }}>Add to Cart</BuyNowButton>

        </Div>
    </ProductDetailContainer>
    {/* <AddAddress appDispatch={isModalOpen} onClose={closeModal}  product={productDetail} /> */}
    </CenterPage>
    </The1440Window>
    </PageWindow>
    
  );
};

export default ProductDetailPage;


interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductDetail; // Define your user data type/interface
}

const AddAddress: React.FC<EditUserModalProps> = ({ isOpen, onClose, product }) => {
 const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [saveBuyProductAPI,saveBuyProductResp] = useSaveBuyProductMutation()

  const currentDate = new Date();
const next15thDay = new Date(currentDate);
next15thDay.setDate(15);
if (currentDate.getDate() > 15) {
  next15thDay.setMonth(next15thDay.getMonth() + 1);
}

  const handleSave = () => {
    saveBuyProductAPI({title:product.title || '',description:product.description || '',price:product.price|| 0,address:address,shipDate:next15thDay.toLocaleDateString(),userId:Number(localStorage.getItem('buyer_id'))})
    .unwrap()
    .then((data)=>{
      if(data.title && data.price){
console.log('order placed')
      }
  }).catch((error)=>{
      console.log(error)
  })
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div style={{width:'350px',height:'250px'}} className="modal-content">
        <Div>
          <Div mb={'5px'} display={'flex'}>
          <Typography mr={'10px'} fontWeight={600} fontSize={'16px'}>Title</Typography>
          <Typography fontSize={"14px"}>{product.title}</Typography>
          </Div>
          <Div display={'flex'} mb={'5px'}>
          <Typography mr={'10px'} fontWeight={600} fontSize={'16px'}>Price</Typography>
          <Typography fontSize={"14px"}>Rs.{product.price}</Typography>
          </Div>
          <Div display={'flex'} mb={'5px'}>
          <Typography mr={'10px'} fontWeight={600} fontSize={'16px'}>Description</Typography>
          <Typography fontSize={"14px"}>{product.description}</Typography>
          </Div>
          <Div display={'flex'} mb={'5px'}>
          <Typography mr={'10px'} fontWeight={600} fontSize={'16px'}>Address</Typography>
          <Div><Input value={address} onChange={(e)=>{setAddress(e.target.value)}}/></Div>
          </Div>
          </Div>
          <Div display={'flex'}>
        <button style={{marginRight:"10px"}} onClick={handleSave}>Place Order</button>
        <button onClick={onClose}>Cancel</button>
          </Div>
      </div>
    </div>
  );
};


const Container = styled.div`
margin: 50px auto;
width: 30%;
background: rgb(255, 255, 255);
border: 1px solid rgb(224, 224, 224);
box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 16px;
border-radius: 4px;
display: flex;
flex-direction: column;
padding: 20px;

`

export const Button = styled.button`
  width: 100px;
  padding: 0;
  display: flex;
  justify-content: center;
  background: rgb(250, 250, 250);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 4px;
  height: 28px;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;