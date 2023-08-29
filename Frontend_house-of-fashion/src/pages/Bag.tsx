import {useMemo, useState} from 'react'
import { useSelector } from 'react-redux'
import { wishlistState } from '../redux/selector/wishlistSelector'
import { ProductGrid } from './MenTShirtProducts';
import ProductCard from '../components/ProductCard';
import { CenterPage, PageWindow, The1440Window } from '../components/styled/pages.styles';
import { Div } from '../components/common/Div';
import { bagState } from '../redux/selector/bagSelector';
import BagProductCard from '../components/BagProductCard';
import { Typography } from '../components/common/Typography';
import { Input } from '../components/common/Input';
import { useNavigate } from 'react-router-dom';
import { useSaveBuyProductMutation } from '../redux/service/BuyProduct';
import { ProductDetail } from '../redux/slice/productDetailSlice';

const Bag = () => {
    const bag = useSelector(bagState);
    const newBagState = useMemo(() =>  bag.slice(1), [bag])
    const [buyProduct, setBuyProduct] = useState<ProductDetail>()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
      setIsModalOpen(false);
    };

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  return (
    <PageWindow mt={'0px'}>
        <The1440Window>
          <CenterPage>
    { newBagState.length ?  <ProductGrid>
      {newBagState.map((product, index) => (
        <BagProductCard
          key={index}
          image={product.image}
          title={product.title || ''}
          price={product.price || 0}
          rating={product.rating || 0}
          description={product.description || ''}
          setBuyProduct={setBuyProduct}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </ProductGrid>
  :  
  
  <Div display={'flex'} flexDirection={'column'} alignItems={'center'} height={'400px'} justifyContent={'center'}> 
  <h2>Please add product to Bag</h2>
  </Div>
  }
      <AddAddress isOpen={isModalOpen} onClose={closeModal}  product={buyProduct} />

    </CenterPage>
    </The1440Window>
    </PageWindow>
  )
}

export default Bag;



interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductDetail | undefined; // Define your user data type/interface
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
    saveBuyProductAPI({title:product?.title || '',description:product?.description || '',price:product?.price|| 0,address:address,shipDate:next15thDay.toLocaleDateString(),userId:Number(localStorage.getItem('buyer_id'))})
    .unwrap()
    .then((data)=>{
      if(data.title && data.price){
        navigate("/orders")
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
          <Typography fontSize={"14px"}>{product?.title}</Typography>
          </Div>
          <Div display={'flex'} mb={'5px'}>
          <Typography mr={'10px'} fontWeight={600} fontSize={'16px'}>Price</Typography>
          <Typography fontSize={"14px"}>Rs.{product?.price}</Typography>
          </Div>
          <Div display={'flex'} mb={'5px'}>
          <Typography mr={'10px'} fontWeight={600} fontSize={'16px'}>Description</Typography>
          <Typography fontSize={"14px"}>{product?.description}</Typography>
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

