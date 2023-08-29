import {useMemo} from 'react'
import { useSelector } from 'react-redux'
import { wishlistState } from '../redux/selector/wishlistSelector'
import { ProductGrid } from './MenTShirtProducts';
import ProductCard from '../components/ProductCard';
import { CenterPage, PageWindow, The1440Window } from '../components/styled/pages.styles';
import { Div } from '../components/common/Div';

const Wishlist = () => {
    const wishlist = useSelector(wishlistState);
   
    const newWishlistState = useMemo(() =>  wishlist.slice(1), [wishlist])
  return (
    <PageWindow mt={'0px'}>
        <The1440Window>
          <CenterPage>
    { newWishlistState.length ?  <ProductGrid>
      {newWishlistState.map((product, index) => (
        <ProductCard
        isCloseVisible={true}
          key={index}
          image={product.image}
          title={product.title || ''}
          price={product.price || 0}
          rating={product.rating || 0}
          description={product.description || ''}
        />
      ))}
    </ProductGrid>
  :  
  
  <Div display={'flex'} flexDirection={'column'} alignItems={'center'} height={'400px'} justifyContent={'center'}> 
  <h2>Please add product to wishlist</h2>
  </Div>
  }
    </CenterPage>
    </The1440Window>
    </PageWindow>
  )
}

export default Wishlist