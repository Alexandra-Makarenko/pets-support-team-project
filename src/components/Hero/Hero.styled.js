import styled from 'styled-components';
import { device } from 'styles/device';
import bgDesktopWave from '../../images/hero/desktop/orangeWavesDesktop.png';
import bgTabWave from '../../images/hero/desktop/bgWavesTablet.png';
import bgMobWave from '../../images/hero/desktop/bgWavesMobile.png';

export const ContainerHero = styled.div`
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${device.desktop} {
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Section = styled.section`
  background-color: ${p => p.theme.backgrounds.bodyPrimary};
  background: url(${bgDesktopWave});
  background-position: 100% calc(21vh + 100%);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${device.desktop} {
    height: 100vh;
  }

  @media ${device.preDesktop} {
    background: url(${bgTabWave});
    background-repeat: no-repeat;
    background-position: 22% calc(9vh + 100%);
    flex-direction: column;
  }

  @media ${device.preTablet} {
    background: url(${bgMobWave});
    background-repeat: no-repeat;
    background-position: 38% calc(2vh + 100%);
    height: calc(100vh - 110px);
  }
`;

export const H2 = styled.h2`
  width: 588px;
  font-family: 'Manrope700';
  font-style: normal;
  font-weight: 700;
  font-size: 68px;
  line-height: 1.47;

  @media ${device.desktop} {
    margin-right: 34px;
  }

  @media ${device.preDesktop} {
    margin-top: 88px;
    margin-bottom: 75px;
  }

  @media ${device.preTablet} {
    max-width: 280px;
    font-size: 32px;
    line-height: 1.38;
    margin-top: 60px;
  }
`;

export const Img = styled.img`
  width: 590px;
  height: 640px;
  object-fit: cover;
  animation: GirlShake 3000ms linear;

  @keyframes GirlShake {
    0% {
      transform: rotate(-3deg);
    }
    25% {
      transform: rotate(3deg);
    }
    50% {
      transform: rotate(-3deg);
    }
    75% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @media ${device.preDesktop} {
    width: 645px;
    height: 715px;
  }

  @media ${device.preTablet} {
    width: 320px;
    height: 337px;
  }
`;

export const Content = styled.div`
  display: flex;

  @media ${device.preDesktop} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${device.preTablet} {
    gap: 58px;
  }
`;

export const Wrap = styled.div`
  position: relative;
`;

export const Div = styled.div`
  display: none;

  @media ${device.desktop} {
    display: flex;
    position: absolute;
    left: 68px;
    top: 43px;
    transform-origin: center;
    animation: HeartShow 5000ms linear infinite;

    @keyframes HeartShow {
      0% {
        opacity: 0;
        transform: translate(0, 30px) rotate(-10deg);
      }
      50% {
        opacity: 1;
        transform: translate(-20px, -15px) rotate(20deg);
      }
      100% {
        opacity: 0;
        transform: translate(0, -50px) rotate(40deg);
      }
    }
  }
`;
