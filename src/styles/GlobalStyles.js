import { createGlobalStyle } from 'styled-components';
// import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
/* @import-normalize; */
/* bring in normalize.css styles */

:root {
  --font-base: 'Manrope', sans-serif;
  --primary-color: #f59256;
  --secondary-color: #3091eb;
  --background-color: #fdf7f2;
  --black-color: #111111;
  --gray-color: #111111;
  /* gray color - opacity 60% */
  --white-color: #ffffff;
}

$mobile: 320px;
$mobile-tablet: 480px;
$tablet: 768px;
$desktop: 1280px;
$pre-mobile: 319px;
$pre-mobile-tablet: 480px;
$pre-tablet: 767px;
$pre-desktop: 1279px;

*,
*::before,
*::after {
  box-sizing: border-box;
}

.link {
  text-decoration: none;
  font-family: inherit;
  display: inline-block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  list-style: none;
  padding-inline-start: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.app {
  background-color: var(--background-color);
  font-family: var(--font-base);
}

.app__container {
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
}

.app__flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app__wrapper {
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 4rem 2rem;

  @media screen and (max-width: 450px) {
    padding: 4rem 1rem 2rem;
  }
}

.main-title {
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-align: left;
  color: #000;
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: 100px;
  }
}

.title {
  font-weight: 700;
  font-size: 48px;
  line-height: 66px;
  text-align: center;
  color: var(--black-color);
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
}

.p-text {
  /* // font-size: 0.8rem;
  // text-align: left;
  // color: var(--gray-color);
  // line-height: 1.5;

  // @media screen and (min-width: 2000px) {
  //   font-size: 1.75rem;
  // } */
}

.bold-text {
  /* // font-size: 1rem;
  // font-weight: 800;
  // color: var(--black-color);
  // text-align: left;

  // @media screen and (min-width: 2000px) {
  //   font-size: 2rem;
  // }

  // @media screen and (max-width: 450px) {
  //   font-size: 0.9rem;
  // } */
}

.btn-orange {
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: center;
  color: var(--white-color);
  background-color: var(--primary-color);
  border-radius: 40px;
  transition: all 0.3s ease;
}

.btn-orange:hover {
  color: var(--black-color);
  background-color: transparent;
}

.btn-transparent {
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 40px;
  color: var(--black-color);
  border-color: var(--primary-color);
  transition: all 0.3s ease;
}

.btn-transparent:hover {
  color: var(--white-color);
  background-color: var(--primary-color);
}

`;
