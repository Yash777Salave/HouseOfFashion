import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Div } from './common/Div'
import { Typography } from './common/Typography'
import { Input } from './common/Input'
import { useNavigate } from 'react-router-dom'
import { useIsSellerUserPresentMutation } from '../redux/service/SaveSellerUser'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slice/userSlice'

const SellerSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const appDispatch= useDispatch();
    const [emailErr, setemailErr] = useState(false) //Yash ne Add kel ahe 
    const [passErr, setPassErr] = useState(false) // Yash ne Add kel ahe
 
    const [isSellerUserPresentAPI,isUserPresentResp] = useIsSellerUserPresentMutation()
console.log('isUserPresentResp', isUserPresentResp)
    const signInHandler=()=>{

    // Yash ne Add kel ahe

      if(email.length === 0)
      {
        setemailErr(true)
      }
      if(password.length === 0)
      {
        setPassErr(true)
      }
        if(email && password){
            console.log('inside if')
            isSellerUserPresentAPI({email:email,password:password}).unwrap()
            .then((data)=>{
                console.log('data', data)
                if(data.email && data.phone_no){
                  localStorage.setItem('user', data.name);
                    navigate("/seller/dashboard")
                    appDispatch(setUser({name:data.name,email:data.email,phone_no:data.phone_no}))
                    localStorage.setItem('seller_id', String(data.id));
                }
            }).catch((error)=>{
                console.log('user not found',error)
            })
        }
    }
  return (
    <Container>
        <Div display={'flex'} flexDirection={'column'} marginBottom={'20px'}alignItems={'center'} >
            <Typography color={'crimson'} fontSize={'30px'} fontWeight={600} fontFamily={'Lato, sans-serif'}>Seller Sign In</Typography>
            
        </Div>
        <Div display={'flex'} alignItems={'center'} marginBottom={'20px'}>
        <Typography fontFamily={'Lato, sans-serif'} marginLeft={'10px'}>Email</Typography>
        <Input height={'28px'} marginLeft={'53px'} width={'250px'} type='text' value={email} onChange={(e)=> {
         
         //Yash ne Update kel ahe 

          if(email.length > 0)
          {
             setemailErr(false)
            
          } 
          
          setEmail(e.target.value)}}></Input>
        </Div>

        { emailErr && <div style={{color:'red'}}>email could not be empty</div>}

        

        <Div marginBottom={'20px'} display={'flex'} alignItems={'center'}>
        <Typography fontFamily={'Lato, sans-serif'} marginLeft={'10px'}>Password</Typography>
        <Input height={'28px'} marginLeft={'25px'} width={'250px'} type='password' value={password} onChange={(e)=>{
          // Yash ne Add kel
           if(password.length > 0)
           {
            setPassErr(false)
           
           }
            setPassword(e.target.value)}}></Input>
        </Div>

        {passErr && <div style={{color:'red'}}>password could not be empty</div>}

        <Div marginBottom={'10px'} display={'flex'} justifyContent={'center'}>
        <Button onClick={signInHandler}>
        <Typography
                    fontSize={"16px"}
                    fontFamily={"Lato, sans-serif"}
                    color={"crimson"}

                  >
                Sign In
                  </Typography>
        </Button>
        </Div>
        <Div  display={'flex'} justifyContent={'center'}>
            <Typography fontFamily={'Lato, sans-serif'} fontSize={'14px'} >Not a member? </Typography>
            <Typography fontFamily={'Lato, sans-serif'} fontSize={'14px'} > &nbsp; <a href="/seller/sign-up">Create Account</a></Typography>
            </Div>
    </Container>
  )
}

export default SellerSignIn;

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