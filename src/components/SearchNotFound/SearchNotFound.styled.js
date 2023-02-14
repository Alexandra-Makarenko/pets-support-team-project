import styled from 'styled-components';
import { ReactComponent as SearchIco } from './search.svg';
import { device } from '../../styles/device';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px};

  &.Title {
    font-weight: 700;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  font-weight: 1.4;
  text-align: center;
  margin-bottom: 30px;

  @media ${device.tablet} {
    font-size: 32px;
  }

  @media ${device.desktop} {
    font-size: 42px;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  font-weight: 1.4;
  text-align: center;
  margin-bottom: 40px;

  @media ${device.tablet} {
    font-size: 24px;
  }

  @media ${device.desktop} {
    font-size: 32px;
  }
`;

export const SearchIcon = styled(SearchIco)`
  width: 100px;
  height: 100px;

  @media ${device.tablet} {
    width: 150px;
    height: 150px;
  }
`;

export const SearchValue = styled.span`
  color: ${props => props.theme.fontColors.buttonSecondary};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  font-weight: 1.4;
  text-align: center;
  margin-bottom: 30px;

  @media ${device.tablet} {
    font-size: 32px;
  }

  @media ${device.desktop} {
    font-size: 42px;
  }
`;
