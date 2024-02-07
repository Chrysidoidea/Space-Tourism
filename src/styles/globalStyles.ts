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
