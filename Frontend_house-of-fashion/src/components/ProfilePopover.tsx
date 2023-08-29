import { styled } from "styled-components";
import { Typography } from "./common/Typography";
import { useRef, useState, useEffect } from "react";
import { Div } from "./common/Div";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../redux/service/userInfo";

const ProfilePopover = () => {
  // const seller_id=localStorage.getItem('seller_id');
  // const {data} = useGetUserQuery({seller_id:Number(seller_id)});
  const user=localStorage.getItem('user');

  const navigate = useNavigate();
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onClick={() => setShowPopover((state) => !state)}
      >
        <img src={"/png/profile.png"} style={{ height: "34px" }} alt="" />
        <Typography
          color={"#808080"}
          fontSize={"12px"}
          mt={"4px"}
          fontFamily={"Lato, sans-serif"}
        >
          Profile
        </Typography>
      </div>
      <>
        {showPopover && (
          <>
            <PopupContainer>
              <Typography
                color={"#535766"}
                fontWeight={600}
                fontFamily={"Lato, sans-serif"}
                mt={"14px"}
                ml={"14px"}
              >
                Welcome
              </Typography>
              <Typography
                color={"#535766"}
                fontSize={"12px"}
                fontFamily={"Lato, sans-serif"}
                mt={"4px"}
                ml={"14px"}
              >
                To access account and manage orders
              </Typography>
              <Div
                display={"flex"}
                ml={"14px"}
                mr={"14px"}
                height={"45px"}
                borderBottom ={"1px solid rgb(224, 224, 224)"}
              >
                {user?.length ?
                  <Div display={'flex'} flexDirection={'column'} alignItems={'center'}>
                  <Typography
                  mt={'4px'}
                  color={"crimson"}
                  fontSize={"16px"}
                  fontFamily={"Lato, sans-serif"}
                >
                 {user}
                </Typography>
                <LogOutButton onClick={()=>{
                  localStorage.removeItem("user");
                  localStorage.removeItem("buyer_id");
                  localStorage.removeItem("seller_id");

                  navigate("/")
                  }}>
                  <Typography
                    color={"crimson"}
                    fontSize={"12px"}
                    fontFamily={"Lato, sans-serif"}
                  >
                    Log Out
                  </Typography>
                </LogOutButton>
                </Div>
                :
              <> <Button onClick={()=>{
                  setShowPopover(false);
                  navigate("/sign-up")}}>
                  <Typography
                    color={"crimson"}
                    fontSize={"12px"}
                    fontFamily={"Lato, sans-serif"}
                  >
                    Sign Up
                  </Typography>
                </Button>
                <Button onClick={()=>{
                  setShowPopover(false);
                  navigate("/sign-in")}} style={{ marginLeft: "14px" }}>
                  <Typography
                    color={"crimson"}
                    fontSize={"12px"}
                    fontFamily={"Lato, sans-serif"}
                  >
                    Sign In
                  </Typography>
                </Button>
                </>
                }
              </Div>

              <Typography
                color={"#535766"}
                fontSize={"12px"}
                fontFamily={"Lato, sans-serif"}
                mt={"14px"}
                ml={"14px"}
                onClick={()=>{navigate("/orders")}}
              >
                <Options>
                Orders
                </Options>
              </Typography>
              <Typography
                color={"#535766"}
                fontSize={"12px"}
                fontFamily={"Lato, sans-serif"}
                mt={"8px"}
                ml={"14px"}
              ><Options>
                Wishlist
              </Options>
              </Typography>
              <Typography
                color={"#535766"}
                fontSize={"12px"}
                fontFamily={"Lato, sans-serif"}
                mt={"8px"}
                ml={"14px"}
                onClick={()=>{navigate('/seller/sign-up')}}
              >
                <Options>
                Join us and sell from us
                </Options>
              </Typography>
            </PopupContainer>
          </>
        )}
      </>
    </Container>
  );
};
export default ProfilePopover;


const Container = styled.div`
  width: 53px;
  display: flex;
  position: relative;
  align-items: center;
`;
const PopupContainer = styled.div`
  width: 180px;
  height: 200px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 8px;
  border-radius: 2px;
  position: absolute;
  z-index: 1000;
  right: calc(0%);
  margin-top: 290px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 66px;
  padding: 0;
  display: flex;
  justify-content: center;
  background: rgb(250, 250, 250);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 4px;
  height: 20px;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;
export const LogOutButton = styled.button`
  width: 66px;
  padding: 0;
  display: flex;
  justify-content: center;
  background: rgb(250, 250, 250);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 4px;
  height: 20px;
  align-items: center;
  margin-top: 1px;
  cursor: pointer;
`;

const Options = styled.span`
&:hover {
  font-size: 14px;
  color: rgb(2,149,246);
  cursor:pointer;
}
`