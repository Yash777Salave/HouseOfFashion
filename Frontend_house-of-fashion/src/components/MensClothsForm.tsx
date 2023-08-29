import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Div } from './common/Div'
import { Typography } from './common/Typography'
import { Input } from './common/Input'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSaveKidClotesMutation, useSaveMenTShirtMutation, useSaveWomenClotesMutation } from '../redux/service/MenClothes'
import { color, typography } from 'styled-system'


const MensClothsForm = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    console.log('location.state', location.state)

    const handleAddProductClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    const [menCloths, setMenCloths] = useState<{title:string,price:string,rating:string,type:string,describe:string}>({title:'',describe:'',price:'',rating:'',type:''});
    const navigate = useNavigate()
    const [saveMenTShirtAPI,saveMenTShirtrResp] = useSaveMenTShirtMutation()
    const [saveWomenClothesAPI,saveWomenClothesResp] = useSaveWomenClotesMutation()
    const [saveKidClothesAPI,saveKidClothesResp] = useSaveKidClotesMutation()
console.log('saveUserResp', saveMenTShirtrResp);
console.log('saveWomenClothesResp', saveWomenClothesResp)
    const onSubmitHandler=()=>{
      console.log('inside submit')
      console.log('menCloths', menCloths)
        if(location.state==='Men'){
          console.log('inside men ')
          if(menCloths.title && menCloths.price && menCloths.rating && menCloths.type){
              console.log('before api call')
              if(menCloths.price! && menCloths.rating!)
              saveMenTShirtAPI({title:menCloths.title,price:Number(menCloths.price),rating: Number(menCloths.rating),describe:menCloths.describe, type:menCloths.type,seller_id:Number(localStorage.getItem('seller_id'))}).unwrap()
              .then((data)=>{
                  if(data.title && data.price){
                      navigate("/")
                  }
              }).catch((error)=>{
                  console.log('user not found',error)
              })
          }
        }
        if(location.state==='Women'){
          console.log('inside women')
          if(menCloths.title && menCloths.price && menCloths.rating && menCloths.type){
            console.log('before women api call')
            if(menCloths.price! && menCloths.rating!)
            saveWomenClothesAPI({title:menCloths.title,price:Number(menCloths.price),rating: Number(menCloths.rating),describe:menCloths.describe, type:menCloths.type,seller_id:Number(localStorage.getItem('seller_id'))}).unwrap()
            .then((data)=>{
                if(data.title && data.price){
                    navigate("/")
                }
            }).catch((error)=>{
                console.log('user not found',error)
            })
        }
        }
        if(location.state==='Kid'){
          console.log('inside women')
          if(menCloths.title && menCloths.price && menCloths.rating && menCloths.type){
            console.log('before women api call')
            if(menCloths.price! && menCloths.rating!)
            saveKidClothesAPI({title:menCloths.title,price:Number(menCloths.price),rating: Number(menCloths.rating),describe:menCloths.describe, type:menCloths.type,seller_id:Number(localStorage.getItem('seller_id'))}).unwrap()
            .then((data)=>{
                if(data.title && data.price){
                    navigate("/")
                }
            }).catch((error)=>{
                console.log('user not found',error)
            })
        }
        }
    }
  return (
    <Container>
        <Div display={'flex'} flexDirection={'column'} marginBottom={'20px'}alignItems={'center'} >
            <Typography color={'crimson'} fontSize={'30px'} fontWeight={600} fontFamily={'Lato, sans-serif'}>{location.state} categories Form</Typography>
            
        </Div>
        <Div display={'flex'} alignItems={'center'} marginBottom={'20px'}>
        <Typography fontFamily={'Lato, sans-serif'} marginLeft={'10px'}>Title</Typography>
        <Input height={'28px'} marginLeft={'53px'} width={'250px'} type='text' value={menCloths.title} onChange={(e)=>setMenCloths((prev)=>{return {...prev,title:e.target.value}})}></Input>
        </Div>
        <Div display={'flex'} alignItems={'center'} marginBottom={'20px'}>
        <Typography fontFamily={'Lato, sans-serif'} marginLeft={'10px'}>Price</Typography>
        <Input height={'28px'} marginLeft={'53px'} width={'250px'} type='text' value={menCloths.price||''} onChange={(e)=>setMenCloths((prev)=>{return {...prev,price:e.target.value}})}></Input>
        </Div>
        <Div display={'flex'} alignItems={'center'} marginBottom={'20px'}>
        <Typography fontFamily={'Lato, sans-serif'} marginLeft={'10px'}>Rating</Typography>
        <Input height={'28px'} marginLeft={'22px'} width={'250px'} type='text' value={menCloths.rating || ''} onChange={(e)=>setMenCloths((prev)=>{return {...prev,rating:e.target.value}})}></Input>
        </Div>
        <Div display={'flex'} alignItems={'center'} marginBottom={'20px'}>
        <Typography fontFamily={'Lato, sans-serif'} marginLeft={'10px'}>Description</Typography>
        <Input height={'28px'} marginLeft={'53px'} width={'250px'} type='text' value={menCloths.describe} onChange={(e)=>setMenCloths((prev)=>{return {...prev,describe:e.target.value}})}></Input>
        </Div>
        <Div marginBottom={'20px'} display={'flex'} alignItems={'center'}>
        <AddProductButton onClick={handleAddProductClick}>
        {menCloths.type ? menCloths.type : 'Product Type'}
        {isDropdownOpen && (
          <Dropdown>
            <DropdownItem onClick={()=>setMenCloths((prev)=>{ return {...prev,type:'T-Shirt'}})}>T-shirt</DropdownItem>
            <DropdownItem onClick={()=>setMenCloths((prev)=>{ return {...prev,type:'Jeans'}})}>Jeans</DropdownItem>
            <DropdownItem onClick={()=>setMenCloths((prev)=>{ return {...prev,type:'Shoes'}})}>Shoes</DropdownItem>
          </Dropdown>
        )}
      </AddProductButton>
        </Div>
        <Div marginBottom={'10px'} display={'flex'} justifyContent={'center'}>
        <Button onClick={onSubmitHandler}>
        <Typography
                    fontSize={"16px"}
                    fontFamily={"Lato, sans-serif"}
                    color={'blue'}
                  >
              Submit
                  </Typography>
        </Button>
        </Div>
    </Container>
  )
}

export default MensClothsForm;

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