import React, { useEffect, useState } from "react";
import ScrollingBanners from "../components/ScrollingBanners";
import Categories from "../components/Categories";
import { CenterPage, PageWindow, The1440Window } from "../components/styled/pages.styles";
import { Div } from "../components/common/Div";
import { Typography } from "../components/common/Typography";
import ProductCard from "../components/ProductCard";
import { styled } from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

type ProductsType={
  id:number;
  title:string;
  price:number;
  description:string;
  image:string;
  rating:number;
}[]
const products:ProductsType = [
  {
    id: 1,
    title: "Men's Shirt",
    image: "https://www.snitch.co.in/cdn/shop/files/4MST2068-04-M14851_360x.jpg?v=1686922552",
    price: 899,
    description:'100% Original Products Pay on delivery might be available Easy 14 days returns and exchanges Try & Buy might be available',
    rating:4
  },
  {
    id: 2,
    title: "Black 81 Print Oversize Drop Shoulder Dri-Fit Jersey",
    image: "https://cdn-media.powerlook.in/pub/media/catalog/product//cache/a355f488ce208bb58a90660f35cdc6e0/d/p/dp_1650_7.jpg",
    price: 1299,
    description:'100% Original Products Pay on delivery might be available Easy 14 days returns and exchanges Try & Buy might be available',
    rating:5

  },
  {
    id: 3,
    title: "Brown Baggy Double Pocket Cargo Pant",
    image: "https://cdn-media.powerlook.in/pub/media/catalog/product//cache/a355f488ce208bb58a90660f35cdc6e0/d/p/dp-_11_6.jpg",
    price: 1499,
    description:'100% Original Products Pay on delivery might be available Easy 14 days returns and exchanges Try & Buy might be available',
    rating:5

  },
];

const Home = () => {
  
  const banners = [
    { id: 1, imageURL: "/img/banner1.jpg" },
    { id: 2, imageURL: "/img/banner2.jpg" },
    { id: 3, imageURL: "/img/banner3.jpg" },
    { id: 4, imageURL: "/img/banner4.jpg" },

  ];
 
  
  return (
    <div>
  <ScrollingBanners banners={banners} autoScrollInterval={5000} />{" "}
  <PageWindow mt={'0px'}>
        <The1440Window>
          <CenterPage>

        <Div display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Div display={'flex'} flexDirection={'column'} alignItems={'center'} marginBottom={'30px'}>
        <Typography fontSize={"22px"} fontWeight={600}>New Arrivals</Typography>
        <Typography fontSize={"16px"} fontWeight={600}>Be the first to wear the newest trends in town</Typography>
        </Div>
        <Div>

        </Div>
        <ProductGrid>
              {products?.map((product, index) => (
                <ProductCard
                  key={index}
                  isCloseVisible={false}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  rating={product.rating}
                />
              ))}
            </ProductGrid>
        </Div>

          </CenterPage>
          </The1440Window>
          </PageWindow>
    </div>
  );
};

export default Home;
