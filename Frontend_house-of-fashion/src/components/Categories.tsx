import React from 'react';
import styled from 'styled-components';

const CategoriesWrapper = styled.section`
  background-color: #f9f9f9;
  padding: 2rem;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Category = styled.div`
  text-align: center;
`;

const CategoryImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

const Categories: React.FC = () => {
  return (
    <CategoriesWrapper>
      <h2>Shop by Category</h2>
      <CategoryGrid>
        <Category>
          <CategoryImage src="URL_TO_GOOGLE_IMAGE_MEN" alt="Men's Clothing" />
          <h3>Men</h3>
        </Category>
        <Category>
          <CategoryImage src="URL_TO_GOOGLE_IMAGE_WOMEN" alt="Women's Clothing" />
          <h3>Women</h3>
        </Category>
        <Category>
          <CategoryImage src="URL_TO_GOOGLE_IMAGE_KIDS" alt="Kid's Clothing" />
          <h3>Kids</h3>
        </Category>
      </CategoryGrid>
    </CategoriesWrapper>
  );
};

export default Categories;
