import React, { useEffect, useRef, useState } from "react";
import { Nav, Bars, NavLink } from "./styled/NavbarElements";
import { NavLink as Link, useNavigate } from "react-router-dom";

import { styled } from "styled-components";
import { Typography } from "./common/Typography";
import { Div } from "./common/Div";
import ProfilePopover from "./ProfilePopover";
import { useSelector } from "react-redux";
import { wishlistState } from "../redux/selector/wishlistSelector";
import { bagState } from "../redux/selector/bagSelector";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const wishlist = useSelector(wishlistState);
  const bag = useSelector(bagState);
  const user=localStorage.getItem('user');


  return (
    <>
      <Nav>
        <div
          style={{
            height: "85px",
            display: "flex",
            alignItems: "center",
            marginLeft: "5px",
          }}
        >
          <img src={"/png/b_logo.png"} style={{ height: "68px" }} alt="" />
          <div
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "20px",
              fontFamily: " Lato, sans-serif",
              color: "crimson",
              marginLeft: "3px",
              cursor:'pointer'
            }}
            onClick={()=>navigate('/')}
          >
            <div>HOUSE OF</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              FASHION
            </div>
          </div>
          <Div display={"flex"}>
            <NavItemMen />
            <NavItemWomen />
            <NavItemKids />
          </Div>
        </div>
        <Bars />

        <div style={{ display: "flex", marginRight: "130px" }}>
          <ProfilePopover />
          <Button onClick={()=> { 
            console.log('onclick');
            navigate('/wishlist')}} >
            <img onClick={()=> { 
            console.log('onclick');
            navigate('/wishlist')}} src={"/png/wishlist.png"} style={{ height: "34px" }} alt="" />
            <Typography
              color={"#808080"}
              fontSize={"12px"}
              fontFamily={"Lato, sans-serif"}
            >
              Wishlist {wishlist.length - 1}
            </Typography>
          </Button>
          <Button onClick={()=> { 
            console.log('onclick');
            navigate('/bag')}}>
            <img onClick={()=> { 
            console.log('onclick');
            navigate('/bag')}}
              src={"/svg/shopping-bag.svg"}
              style={{ height: "34px" }}
              alt=""
            />
            <Typography
              color={"#808080"}
              fontSize={"12px"}
              fontFamily={"Lato, sans-serif"}
            >
              Bag {bag.length - 1}
            </Typography>
          </Button>
          {user?.length ? <AddProductsButton onClick={()=> { 
            navigate('/seller/dashboard')}}>
            
            <Typography
              color={"#808080"}
              fontSize={"12px"}
              fontFamily={"Lato, sans-serif"}
            >
              Add Products
            </Typography>
          </AddProductsButton>
        :<></>  
        }
        </div>
      </Nav>
    </>
  );
};

export default Navbar;

export const NavItemMen = () => {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!menu.current?.contains(e.target as HTMLElement)) {
        setShowPopover(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Container ref={menu}>
      <NavLink
        onClick={() => {
          console.log("navLink");
          setShowPopover((state) => !state);
        }}
      >
        Men
      </NavLink>
      <>
        {showPopover && (
          <>
            <Popover>
              <PopoverHeading>Topwear</PopoverHeading>
              <PopoverContent
                onClick={() => setShowPopover(false)}
                to={"/men/shirts"}
              >
                T-Shirts
              </PopoverContent>
              <PopoverHeading>Bottomwear</PopoverHeading>
              <PopoverContent
                onClick={() => setShowPopover(false)}
                to={"/men/jeans"}
              >
                Jeans
              </PopoverContent>
              <PopoverHeading>Footwear</PopoverHeading>
              <PopoverContent
                onClick={() => setShowPopover(false)}
                to={"/men/shoes"}
              >
                Casual Shoes
              </PopoverContent>
            </Popover>
          </>
        )}
      </>
    </Container>
  );
};
export const NavItemWomen = () => {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!menu.current?.contains(e.target as HTMLElement)) {
        setShowPopover(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Container ref={menu}>
      <NavLink onClick={() => setShowPopover((state) => !state)}>Women</NavLink>
      <>
        {showPopover && (
           <>
           <Popover>
             <PopoverHeading>Topwear</PopoverHeading>
             <PopoverContent
               onClick={() => setShowPopover(false)}
               to={"/women/shirts"}
             >
               T-Shirts
             </PopoverContent>
             <PopoverHeading>Bottomwear</PopoverHeading>
             <PopoverContent
               onClick={() => setShowPopover(false)}
               to={"/women/jeans"}
             >
               Jeans
             </PopoverContent>
             <PopoverHeading>Footwear</PopoverHeading>
             <PopoverContent
               onClick={() => setShowPopover(false)}
               to={"/women/shoes"}
             >
               Casual Shoes
             </PopoverContent>
           </Popover>
         </>
        )}
      </>
    </Container>
  );
};
export const NavItemKids = () => {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!menu.current?.contains(e.target as HTMLElement)) {
        setShowPopover(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Container ref={menu}>
      <NavLink onClick={() => setShowPopover((state) => !state)}>Kids</NavLink>
      <>
        {showPopover && (
           <>
           <Popover>
             <PopoverHeading>Topwear</PopoverHeading>
             <PopoverContent
               onClick={() => setShowPopover(false)}
               to={"/kid/shirts"}
             >
               T-Shirts
             </PopoverContent>
             <PopoverHeading>Bottomwear</PopoverHeading>
             <PopoverContent
               onClick={() => setShowPopover(false)}
               to={"/kid/jeans"}
             >
               Jeans
             </PopoverContent>
             <PopoverHeading>Footwear</PopoverHeading>
             <PopoverContent
               onClick={() => setShowPopover(false)}
               to={"/kid/shoes"}
             >
               Casual Shoes
             </PopoverContent>
           </Popover>
         </>
        )}
      </>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
`;

const Popover = styled.div`
  width: 190px;
  height: 200px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 8px;
  border-radius: 2px;
  position: absolute;
  z-index: 1000;
  /* right: calc(0%); */
  /* top: 1px; */
  margin-top: 290px;
  display: flex;
  flex-direction: column;
`;

const PopoverHeading = styled.div`
  font-family: Lato, sans-serif;
  color: crimson;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 14px;
`;
const PopoverContent = styled(Link)`
  font-family: Lato, sans-serif;
  color: rgb(75, 84, 97);
  font-weight: 500;
  margin-top: 10px;
  margin-left: 14px;
  cursor: pointer;
  margin-bottom: 2px;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    font-size: 16px;
    color: #222222;
  }
`;

const Button = styled.button`
  width: 66px;
  padding: 0;
  justify-content: center;
  background: white;
  border: none;
  align-items: center;
  cursor: pointer;
`;

export const AddProductsButton = styled.button`
  width: 110px;
  height:40px;
  padding: 0;
  display: flex;
  justify-content: center;
  background: rgb(250, 250, 250);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 4px;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
`;