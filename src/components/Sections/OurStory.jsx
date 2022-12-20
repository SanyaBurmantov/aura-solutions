import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
import AddImage2 from "../../assets/img/who.png";

export default function OurStory() {
    return (
        <Wrapper id="advantages">
            <div className="whiteBg">
                <div className="container">
                    <Advertising className="flexSpaceCenter">
                        <AddLeft>

                            <ImgWrapper>
                                Reach out to our Founder and CEO
                                <img className="radius8" src={AddImage2} alt="add"/>
                                <a href='https://www.linkedin.com/in/jack-letter-one'> Bahtiyar Tashov | LinkedIn</a>
                            </ImgWrapper>

                        </AddLeft>
                        <AddRight>
                            <h1 className="font40 extraBold">
                                Our story
                            </h1>

                            <p className="font13">
                                Our story began in 2015 when our Founder Bahtiyar decided he wanted to apply his
                                precious experience in software development and share his ideas with the tech world. His
                                inside view on software development gave him a lot of understanding about software
                                engineers, their routine and milestones, as well as to understand clients and their
                                demands. Then, step by step, he eventually achieved a 50-engineers pool and numerous
                                satisfied clients. What lies ahead? We are excited to know too, and hope we can share
                                our path with you.



                            </p>
                        </AddRight>

                    </Advertising>

                </div>
            </div>

        </Wrapper>
    );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 400px) {
    padding: 0;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;

  p {
    max-width: 475px;
  }

  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }

    p {
      margin: 0 auto;
    }
  }
`;
const Advertising = styled.div`
  // padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
