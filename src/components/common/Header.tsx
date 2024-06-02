import { styled } from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      {/* header에 난수화된 class가 적용되며, 
      난수화 된 class를 사용하는 이유는 의도한 컴포넌트임을 캡슐화하기 위해*/}
      <h1>book store</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  /* background-color: ${({theme})=> theme.color.background}; */

  h1{
    color: ${({theme})=> theme.color.secondary};
  }
`;

export default Header;