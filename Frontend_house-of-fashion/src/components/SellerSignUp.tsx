import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Div } from './common/Div'
import { Typography } from './common/Typography'
import { Input } from './common/Input'
import { useNavigate } from 'react-router-dom'
import { useSaveSellerUserMutation } from '../redux/service/SaveSellerUser'

const SellerSignUp = () => {
    const [user, setUser] = useState<{name:string,email:string,phone_no:string,password:string}>({name:'',email:'',phone_no:'',password:''});
    const navigate = useNavigate()
    const [saveUserAPI,saveUserResp] = useSaveSellerUserMutation()
console.log('saveUserResp', saveUserResp)

// Yash ne add kel

const[emailErr , setEmailErr] = useState(false)
const[nameErr , setNameErr] = useState(false)
const[passErr , setPassErr] = useState(false)
const[phoneNoErr , setPhoneNoErr] = useState(false)
    const signInHandler=()=>{

      // Yash ne add kel

      if(user.name.length=== 0)
      {
        setNameErr(true)
      }

      if(user.email.length === 0)
      {
        setEmailErr(true)
      }

      if(user.password.length === 0)
      {
        setPassErr(true)
      }

      if(user.phone_no.length === 0)
      {
        setPhoneNoErr(true)
      }

        console.log('user', user)
        if(user.email && user.name && user.password && user.phone_no){
            console.log('before api call')
            saveUserAPI(user).unwrap()
            .then((data)=>{
                if(data.email && data.phone_no){
                    navigate("/seller/sign-in")
                }
            }).catch((error)=>{
                console.log('user not found',error)
            })
        }
    }
  return (
    <Container>
        <Div display={'flex'} flexDirection={'column'} marginBottom={'20px'}alignItems={'center'} >
            <Typography color={'crimson'} fontSize={'30px'} fontWeight={600} fontFamily={'Lato, sans-serif'}>Seller Sign Up</Typography>
            
        </Div>
        <Div display={'flex'} alignItems={'center'} marginBottom={'20px'}>
        <Typography fontFamily={'Lato, sans-serif'} marginLeft={'10px'}>Name</Typography>
        <Input height={'28px'} marginLeft={'53px'} width={'250px'} type='text' value={user.name} onChange={(e)=>{ 
                   
// Yash ne add kel

          if(user.name.length > 0)
          {
            setNameErr(false)
          }
            
            setUser((prev)=>{return {...prev,name:e.target.value}})}}></Input>

        </Div>

        {nameErr && <Typography color={'red'}>please enter a name</Typography>}

        <Div display={'flex'} alignItems={'center'} marginBottom={'20px'}>
        <Typography fontFamily={'Lato, sans-serif'} marginLeft={'10px'}>Email</Typography>
        <Input height={'28px'} marginLeft={'53px'} width={'250px'} type='text' value={user.email} onChange={(e)=>setUser((prev)=>{
          
 // Yash ne add kel
          if(user.email.length > 0)
        {
           setEmailErr(false)
        
        } 
        
        {return {...prev,email:e.target.value}}})}></Input>
        </Div>

        {emailErr && <Typography color={'red'}>please enter an valid email</Typography>}

        <Div display={'flex'} alignItems={'center'} marginBottom={'20px'}>
        <Typography fontFamily={'Lato, sans-serif'} marginLeft={'10px'}>Phone No</Typography>
        <Input height={'28px'} marginLeft={'22px'} width={'250px'} type='text' value={user.phone_no} onChange={(e)=>setUser((prev)=>{ 
                  
// Yash ne add kel

          if(user.phone_no.length > 0 ) 
          
          {
            setPhoneNoErr(false)
            
          }
          
          {return {...prev,phone_no:e.target.value}}})}></Input>
        </Div> 
        
        {phoneNoErr && <Typography color={'red'}>please enter a phone number</Typography>}

        <Div marginBottom={'20px'} display={'flex'} alignItems={'center'}>
        <Typography fontFamily={'Lato, sans-serif'} marginLeft={'10px'}>Password</Typography>
        <Input height={'28px'} marginLeft={'25px'} width={'250px'} type='password' value={user.password} onChange={(e)=>setUser((prev)=>{ 
          
// Yash ne add kel

          if(user.password.length > 0)
          
          {
            setPassErr(false)
            
          }
          
          { return {...prev,password:e.target.value}}})}></Input>
        </Div>
       

        {passErr && <Typography color={'red'}>please enter passwords</Typography>}

        <Div marginBottom={'10px'} display={'flex'} justifyContent={'center'}>
        <Button onClick={signInHandler}>
        <Typography
                    fontSize={"16px"}
                    fontFamily={"Lato, sans-serif"}
                    color={"crimson"}

                  >
                Sign Up
                  </Typography>
        </Button>
        </Div>
        <Div  display={'flex'} justifyContent={'center'}>
            <Typography fontFamily={'Lato, sans-serif'} fontSize={'14px'} >Already a member? </Typography>
            <Typography fontFamily={'Lato, sans-serif'} fontSize={'14px'} > &nbsp; <a href="/seller/sign-in">Sign In</a></Typography>
            </Div>
    </Container>
  )
}

export default SellerSignUp;

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