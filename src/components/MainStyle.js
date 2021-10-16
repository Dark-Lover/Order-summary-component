import styled from "styled-components";
import hero from "../Assets/images/hero.svg";
import playM from "../Assets/images/icon-music.svg";
import deskBg from "../Assets/images/pattern-background-desktop.svg";
import mobBg from "../Assets/images/pattern-background-mobile.svg";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(225, 100%, 94%);
  background-image: url(${mobBg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (min-width: 800px) {
    background-image: url(${deskBg});
  }
`;

export const Content = styled.div`
  width: 85%;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  max-width: 450px;
`;
export const Hero = styled.div`
  height: 8rem;
  background: url(${hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Heading = styled.h1`
  font-size: 1.3rem;
  font-weight: 900;
  text-align: center;
  padding: 1rem 2rem;
  color: hsl(223, 47%, 23%);
  letter-spacing: 0.02rem;
`;
export const Paragraph = styled.p`
  font-size: 0.6rem;
  font-weight: 700;
  text-align: center;
  padding: 0.5rem 2rem 1.2rem;
  color: hsl(224, 23%, 55%);
  letter-spacing: 0.03rem;
  line-height: 1.3rem;
  @media screen and (min-width: 360px) {
    width: 300px;
  }
`;
export const Plan = styled.div`
  background-color: hsl(225, 100%, 98%);
  height: 2.5rem;
  width: 85%;
  height: 5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  @media screen and (min-width: 450px) {
    width: 340px;
  }
`;
export const PlayImage = styled.div`
  background: url(${playM});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 3rem;
  width: 3rem;
`;
export const PlanType = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.3rem;
  justify-content: space-between;
`;
export const MyPlan = styled.h3`
  font-weight: 900;
  color: hsl(223, 47%, 23%);
  font-size: 0.8rem;
`;
export const Pricing = styled.div`
  color: hsl(224, 23%, 55%);
  font-size: 0.8rem;
`;
export const ChangeBtn = styled.div`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  font-size: 0.8rem;
  font-weight: 700;
  &:hover {
    text-decoration: none;
    color: hsl(245, 75%, 52%);
  }
`;
export const ProceedBtn = styled.div`
  cursor: pointer;
  background-color: hsl(245, 75%, 52%);
  color: white;
  height: 2.5rem;
  width: 85%;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  box-shadow: -1px 30px 25px -9px hsl(225, 100%, 94%);
  margin: 1rem 0 0 0;
  transition: all 0.5s ease;
  &:hover,
  &:active {
    background-color: hsl(245, 75%, 65%);
  }
  @media screen and (min-width: 450px) {
    width: 340px;
  }
`;
export const CancelBtn = styled.div`
  cursor: pointer;
  font-weight: 700;
  color: hsl(224, 23%, 55%);
  height: 2.5rem;
  width: 85%;
  height: 5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  &:hover,
  &:active {
    color: hsl(223, 47%, 23%);
  }
`;
export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  text-align: center;
`;
