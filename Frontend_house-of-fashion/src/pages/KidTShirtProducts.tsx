import React from 'react'
import ProductCard from '../components/ProductCard'
import styled from 'styled-components';
import { CenterPage, PageWindow, The1440Window } from '../components/styled/pages.styles';
import { useGetKidClothesByTypeQuery } from '../redux/service/MenClothes';
import Spinner from '../components/common/Spinner';

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;


const KidTShirtProducts: React.FC = () => {
  const {data,isFetching} = useGetKidClothesByTypeQuery({type:'T-Shirt'})
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
                image={`/jpg/kidshirt${index+1}.jpg`}
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
};

export default KidTShirtProducts;
