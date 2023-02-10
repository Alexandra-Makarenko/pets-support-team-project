import styled from 'styled-components';
import { device } from '../../../styles/device';

 export const PetsListSection = styled.section`
  padding-top:30px;
    @media ${device.tablet} { 
        padding-top:60px;
  }

`;
 export const PetsList = styled.ul`
  margin-bottom: 32px;   

     @media ${device.tablet} {
        display: flex;   
        flex-wrap:wrap;    
        margin-left: -32px;
        }
}
`;
 
