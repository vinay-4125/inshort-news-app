import styled from "styled-components";

export const DesktopItems = styled.span`
  @media all and (max-width: 900px) {
    display: none;
  }
`;

export const MobileItems = styled.span`
  display: none;
  ${
    "" /* @media (max-width: 1400) {
    display: none;
  } */
  }
  @media all and (max-width: 900px) {
    display: block;
  }
`;

export const TabletItems = styled.span`
  display: none;
  @media all and(max-width:900px) {
    display: block;
  }
`;
