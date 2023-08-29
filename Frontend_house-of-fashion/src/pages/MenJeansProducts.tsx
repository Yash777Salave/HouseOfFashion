import React from 'react'
import { useGetClothesByTypeQuery } from '../redux/service/MenClothes';
import { CenterPage, PageWindow, The1440Window } from '../components/styled/pages.styles';
import Spinner from '../components/common/Spinner';
import { ProductGrid } from './MenTShirtProducts';
import ProductCard from '../components/ProductCard';

const MenJeansProducts = () => {
    const {data,isFetching} = useGetClothesByTypeQuery({type:'Jeans'})
    console.log('data', data)
    return (
      <PageWindow mt={'0px'}>
        <The1440Window>
          <CenterPage>
            {
              isFetching ? <Spinner size='15px' type='dots' color='#0295F6'/> :
              <ProductGrid>
              {data?.map((product, index) => (
                <ProductCard
                  key={index}
                  isCloseVisible={false}
                  image={`/jpg/menjeans${index+1}.jpg`}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  description={product.describe}
                />
              ))}
            </ProductGrid>
  
            }
   
        </CenterPage>
      </The1440Window>
      </PageWindow>
    );
}

export default MenJeansProducts