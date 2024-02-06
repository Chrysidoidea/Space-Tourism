import styled, { createGlobalStyle, css } from "styled-components";
import { device } from "../utils/windowUtils";

export const GlobalStyle = createGlobalStyle`
  :root {
    --global: #0c0d18;
    --color-white: #fff;
    --color-black: #000;
    --color-gray: #f8f8f8;
    --color-night-gray: #979797;
    --light-periwinkle-blue: #D0D6F9; 
    --dark-navy-blue: #0B0D17;
  }
 html, body {
  background-color: var(--global);
  margin: 0;
  padding: 0;
 }
 body {
  position: relative;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: -10;
  }

body, h1,
figure, blockquote, dl, dd {
  color: var(--color-white);
  margin-block-end: 0;
  margin-block-start: 0;
}
h2, h3, h4, h5, p {
  color: var(--light-periwinkle-blue);
  font-weight: 400;
}

`;

export const UppercaseText = css`
  text-transform: uppercase;
`;

export const Header1 = styled.h1`
  ${UppercaseText};
  font-family: "Bellefair", sans-serif;
  font-size: clamp(5rem, 20vw, 9rem);
  font-weight: 400;
  margin-bottom: 0.4rem;

  @media (${device.tablet}) {
    margin-bottom: 0.1rem;
  }
  @media (${device.desktop}) {
    width: 100%;
    text-align: left;
    letter-spacing: 0.01rem;
    margin-bottom: 1rem;
  }
`;
export const Header2 = styled.h2`
  ${UppercaseText};
`;
export const Header3 = styled.h3`
  ${UppercaseText};
  font-family: "Barlow Condensed", sans-serif;

  & > span {
    color: grey;
  }
`;
export const Header4 = styled.h4`
  ${UppercaseText}
`;
export const Header5 = styled.h5`
  ${UppercaseText};
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 0.16rem;
  font-size: clamp(1rem, 3vw, 2.1rem);
  margin-bottom: 1.2rem;

  @media (${device.tablet}) {
    margin-top: 7rem;
  }

  @media (${device.desktop}) {
    width: 100%;
    text-align: left;
    letter-spacing: 0.35rem;
    margin-bottom: 1.5rem;
    margin-top: 12.3rem;
  }
`;
export const Paragraph = styled.p`
  font-family: "Barlow", sans-serif;
  text-align: center;
  line-height: 1.75;
  font-size: clamp(0.92rem, 2vw, 1.1rem);
  width: clamp(21rem, 55vw, 30rem);
  margin-bottom: 5rem;

  @media (${device.tablet}) {
    margin-bottom: 10rem;
  }

  @media (${device.desktop}) {
    margin-bottom: 0;
    text-align: left;
  }
`;
export const Button = styled.button`
  ${UppercaseText}
  position: relative;
  font-family: "Bellefair", sans-serif;
  height: clamp(9.5rem, 31vw, 17.2rem);
  width: clamp(9.5rem, 31vw, 17.2rem);
  background-color: white;
  border-radius: 50%;
  font-size: clamp(1.2rem, 5vw, 2rem);
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    bottom: 0;
    left: 0%;
    right: 0;
    border-radius: 50%;
    background-color: #97979732;
    backdrop-filter: blur(0.2rem);
    z-index: -1;
    transition: 0.1s;
  }
  &:hover::before {
    transform: scale(1.5);
  }

  @media (${device.desktop}) {
    margin-top: 19rem;
    margin-left: 1.3rem;

    &:active::before {
      transform: scale(1.49);
    }
  }
`;
type SectionProps = {
  $crew?: boolean;
};

export const Section = styled.section<SectionProps>`
  background-color: transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  @media (${device.desktop}) {
    height: 100%;
    justify-content: flex-start;
  }

  ${(props) =>
    props.$crew &&
    css`
      @media (${device.desktop}) {
        width: 100%;
      }
    `}
    
`;

export const DetailsLabelValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  ${UppercaseText}

  :first-child {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 200;
    color: var(--light-periwinkle-blue);
    letter-spacing: 0.15rem;
  }

  :last-child {
    font-family: "Bellefair", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  }

  @media (${device.tablet}) {
    :last-child {
      font-size: 1.8rem;
    }
  }

  @media (${device.desktop}) {
    &:last-child,
    &:first-child {
      align-items: flex-start;
    }
  }
`;
type BreakLineProps = {
  $crew?: string;
};

export const BreakLine = styled.hr<BreakLineProps>`
  height: 1px;
  width: 100%;
  border: none;
  background-color: #97979747;
  margin: 0;

  ${(props) =>
    props.$crew &&
    css`
      @media (${device.tablet}) {
        display: none;
      }
    `}
`;

export const PageHeading = styled.h3`
  ${UppercaseText};
  font-family: "Barlow Condensed", sans-serif;
  margin-top: 0.3rem;
  margin-bottom: 2.2rem;
  letter-spacing: 0.2rem;
  font-size: 0.9rem;

  & > span {
    color: grey;
    margin-right: 1rem;
  }

  @media (${device.tablet}) {
    margin-top: 3rem;
    margin-left: 1rem;
    font-size: 1.3rem;
    align-self: flex-start;
  }

  @media (${device.desktop}) {
    margin-top: 8rem;
    margin-left: 9rem;
    font-size: 1.8rem;
    letter-spacing: 0.3rem;
    min-width: 30vw;
  }
`;
