import React from 'react'
import {  useGetKidClothesByTypeQuery } from '../redux/service/MenClothes';
import { CenterPage, PageWindow, The1440Window } from '../components/styled/pages.styles';
import Spinner from '../components/common/Spinner';
import ProductCard from '../components/ProductCard';
import { ProductGrid } from './MenTShirtProducts';

const KidShoesProducts = () => {
    const {data,isFetching} = useGetKidClothesByTypeQuery({type:'Shoes'})
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
                  image={`/jpg/kidshoes${index+1}.jpg`}
                  title={product.title}
                  price={product.price}
                  description={product.describe}
                  rating={product.rating}
                />
              ))}
            </ProductGrid>
  
            }
   
        </CenterPage>
      </The1440Window>
      </PageWindow>
    );
}

export default KidShoesProducts