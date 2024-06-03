import React from 'react'
import logo from '../../assets/images/logo.png';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyle>
    <h1 className="logo">
      <img src={logo} alt="book store logo" />
    </h1>
    <div className="copyright">
      copyright(c). 2024. book store
    </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  width: 100%;
  margin: 0 auto;
  max-width: ${({theme}) => theme.layout.width.large};
  border-top: 1px solid ${({theme}) => theme.color.border};
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

  .logo{
    img{
      width: 140px;
      margin-left: 24px;
    }
  }// logo

  .copyright {
    p {
      font-size: 0.75;
      color: ${({theme})=> theme.color.text};
    }
  }
`;

export default Footer