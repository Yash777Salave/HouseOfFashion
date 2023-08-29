import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from './common/Typography';
import { Div } from './common/Div';
import { useNavigate } from 'react-router-dom';
import { useGetUserQuery } from '../redux/service/userInfo';

interface SellerInfoType{
    name:string;
    email:string;
    phone_no:string;
}
interface SellerDashboardProps {
  sellerInfo: SellerInfoType;
}

const SellerDashboard: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate()
    const seller_id=localStorage.getItem('seller_id');
    const {data} = useGetUserQuery({seller_id:Number(seller_id)});
    const handleAddProductClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <DashboardContainer>
      <ProfileHeader>
      <Typography fontSize={"16px"}
                    fontWeight={600}
                    fontFamily={"Lato, sans-serif"}
                    color= {"crimson"}>
            {data?.name}
            </Typography>
      </ProfileHeader>
      <SellerDetails>
        <Div display={'flex'}>
        <Typography fontSize={"14px"}
                    fontWeight={600}
                    fontFamily={"Lato, sans-serif"}>
             Email :
            </Typography>
        <Typography fontSize={"14px"}
                    fontFamily={"Lato, sans-serif"}>
              {data?.email}
            </Typography>
            </Div>
        <Div display={'flex'}>
        <Typography fontSize={"14px"}
                    fontWeight={600}
                    fontFamily={"Lato, sans-serif"}>
             Phone No : 
            </Typography>
        <Typography fontSize={"14px"}
                    fontFamily={"Lato, sans-serif"}>
              {data?.phone_no}
            </Typography>
            </Div>
      </SellerDetails>
      <AddProductButton onClick={handleAddProductClick}>
        Add Product
        {isDropdownOpen && (
          <Dropdown>
            <DropdownItem onClick={()=>{navigate("/men-clothes",{state:"Men"})}}>Mens</DropdownItem>
            <DropdownItem onClick={()=>{navigate("/men-clothes",{state:"Women"})}}>Women</DropdownItem>
            <DropdownItem onClick={()=>{navigate("/men-clothes",{state:"Kid"})}}>Kids</DropdownItem>
          </Dropdown>
        )}
      </AddProductButton>    </DashboardContainer>
  );
};

export default SellerDashboard;

const DashboardContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 50px auto;
width: 70%;
`;

const ProfileHeader = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px 8px 0 0;
`;

const SellerDetails = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin-top: 20px;
`;

const AddProductButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 20px;
  position: relative;
  &:hover {
    background-color: #0056b3;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color:#222222;
  white-space:nowrap;

  &:hover {
    background-color: #f2f2f2;
  }
`;