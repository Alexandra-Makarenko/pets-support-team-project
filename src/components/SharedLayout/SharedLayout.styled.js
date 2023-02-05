import styled from 'styled-components';
// import { theme } from "../../styles/theme.jsx";
import { device } from '../../styles/device';


export const SharedLayoutBox = styled.div`
  background-color: ${props => props.theme.backgrounds.input};

   @media ${device.preMobileTablet} { 
    max-width: 100%;
  }

`;