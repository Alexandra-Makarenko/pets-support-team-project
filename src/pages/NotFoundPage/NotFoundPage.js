import React from 'react';
import { ButtonWrapper, LinkStyled } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <>
      <section style={{ padding: '150px 0 50px', background: '#fff' }}>
        <h1 style={{ fontSize: '64px', textAlign: 'center' }}>404</h1>
        <div
          style={{
            backgroundImage:
              'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
            height: '400px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            textAlign: 'center',
          }}
        ></div>

        <div style={{ marginTop: '-50px' }}>
          <h3 style={{ fontSize: '34px', textAlign: 'center' }}>
            Look like you're lost
          </h3>

          <p style={{ textAlign: 'center' }}>
            the page you are looking for not avaible!
          </p>
          <ButtonWrapper>
            <LinkStyled to={'/'}>Go to Home</LinkStyled>
          </ButtonWrapper>
        </div>
      </section>
    </>
  );
};
export default NotFoundPage;
