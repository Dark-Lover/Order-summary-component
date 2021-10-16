import React from "react";
import {
  Wrapper,
  Content,
  Hero,
  Heading,
  Paragraph,
  ContentWrapper,
  Plan,
  PlayImage,
  PlanType,
  MyPlan,
  Pricing,
  ChangeBtn,
  ProceedBtn,
  CancelBtn,
  Footer,
} from "./MainStyle";

const MainPage = () => {
  return (
    <Wrapper>
      <Content>
        <Hero />
        <ContentWrapper>
          <Heading>Order Summary</Heading>
          <Paragraph>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </Paragraph>
          <Plan>
            <PlayImage />
            <PlanType>
              <MyPlan>Annual Plan</MyPlan>
              <Pricing>$59.99/year</Pricing>
            </PlanType>
            <ChangeBtn>Change</ChangeBtn>
          </Plan>
          <ProceedBtn>Proceed to Payment</ProceedBtn>
          <CancelBtn>Cancel Order</CancelBtn>
        </ContentWrapper>
      </Content>{" "}
      <Footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#"> Houssine | Dark_Lover </a>.
        </div>
      </Footer>
    </Wrapper>
  );
};

export default MainPage;
