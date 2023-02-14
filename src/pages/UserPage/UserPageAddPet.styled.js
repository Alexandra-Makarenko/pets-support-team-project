import { Field } from 'formik';
import { device } from 'styles/device';

const { default: styled } = require('styled-components');

// @media ${device.tablet} {}
// @media ${device.desktop} {}

export const AddPetContainerStepOne = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    padding: 40px 80px;
  }
  @media ${device.desktop} {
  }
`;

export const AddPetContainerStepTwo = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    padding: 40px 107px;
  }
  @media ${device.desktop} {
    padding: 40px 112px;
  }
`;

export const AddPetHeaderStepOne = styled.h2`
  font-family: 'Manrope400';
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: ${props => props.theme.fontColors.primary};
  margin-bottom: 28px;
  @media ${device.tablet} {
    font-size: 36px;
    line-height: 49px;
    margin-bottom: 40px;
  }
  @media ${device.desktop} {
  }
`;

export const AddPetHeaderStepTwo = styled.h2`
  font-family: 'Manrope400';
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: ${props => props.theme.fontColors.primary};
  margin-bottom: 20px;
  @media ${device.tablet} {
    font-size: 36px;
    line-height: 49px;
  }
  @media ${device.desktop} {
  }
`;

export const AddPhotoHeader = styled.h3`
  font-family: 'Manrope400';
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${props => props.theme.fontColors.primary};
  margin-bottom: 20px;
  @media ${device.tablet} {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.01em;
  }
  @media ${device.desktop} {
  }
`;

export const PetPhotoPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 208px;
  border-radius: 20px;
  background-color: ${props => props.theme.backgrounds.input};
  @media ${device.tablet} {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
  @media ${device.desktop} {
  }
`;

export const PetPhoto = styled.img`
  width: 208px;
  height: 208px;
  border-radius: 20px;
  @media ${device.tablet} {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const PetPhotoLabel = styled.label`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media ${device.tablet} {
    margin-bottom: 40px;
  }
`;

export const PetInputLabel = styled.p`
  font-family: 'Manrope500';
  font-size: 18px;
  line-height: 26px;
  color: ${props => props.theme.fontColors.primary};
  margin-bottom: 8px;
  @media ${device.tablet} {
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 12px;
  }
  @media ${device.desktop} {
  }
`;

export const PetInputField = styled(Field)`
  display: block;
  font-family: 'Manrope400';
  font-size: 14px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  width: 240px;
  margin-bottom: 16px;
  padding: 11px 14px;
  color: ${props => props.theme.fontColors.primary};
  outline: none;
  background-color: ${props => props.theme.backgrounds.input};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  @media ${device.tablet} {
    font-family: 'Manrope400';
    font-size: 16px;
    line-height: 26px;
    width: 448px;
    margin-bottom: 28px;
    padding: 10px 16px;
    letter-spacing: 0;
  }

  @media ${device.desktop} {
  }
`;

export const PetCommentField = styled(Field)`
  font-family: 'Manrope400';
  font-size: 14px;
  line-height: 26px;
  letter-spacing: ${props => props.theme.fonts.letterSpacing};
  width: 240px;
  height: 100px;
  padding: 12px 14px;
  color: ${props => props.theme.fontColors.primary};
  outline: none;
  background-color: ${props => props.theme.backgrounds.input};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;

  @media ${device.tablet} {
    font-family: 'Manrope400';
    font-size: 16px;
    line-height: 26px;
    width: 394px;
    height: 116px;
    padding: 16px;
  }

  @media ${device.desktop} {
  }
`;

export const PetButtonBlock = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 40px;
  @media ${device.tablet} {
    justify-content: space-between;
    flex-direction: row;
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${device.desktop} {
    width: 384px;
  }
`;

export const PetButtonBack = styled.button`
  width: 240px;
  padding-top: 9px;
  padding-bottom: 9px;
  font-family: 'Manrope500';
  font-size: 16px;
  line-height: 22px;
  font-family: 'Manrope500';
  border-radius: 40px;
  color: ${props => props.theme.fontColors.secondary};
  background-color: transparent;
  border: 2px solid #f59256;
  &:hover,
  :focus {
    background-color: ${props => props.theme.backgrounds.input};
  }
  @media ${device.tablet} {
    width: 180px;
  }

  @media ${device.desktop} {
  }
`;

export const PetButtonNext = styled.button`
  width: 240px;
  padding-top: 9px;
  padding-bottom: 9px;
  font-family: 'Manrope500';
  font-size: 16px;
  line-height: 22px;
  border-radius: 40px;
  color: ${props => props.theme.fontColors.white};
  background-color: ${props =>
    props.disabled ? '#A0A0A0' : props.theme.backgrounds.buttonPrimary};
  border: none;
  margin-bottom: 12px;
  &:hover,
  :focus {
    background-color: ${props => props.theme.hovers.primary};
    color: ${props => props.theme.fontColors.white};
  }
  @media ${device.tablet} {
    font-size: 20px;
    line-height: 27px;
    padding-top: 8.5px;
    padding-bottom: 8.5px;
    margin-bottom: 0;
    width: 180px;
  }

  @media ${device.desktop} {
  }
`;
