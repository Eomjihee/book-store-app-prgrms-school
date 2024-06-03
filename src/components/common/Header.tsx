import { styled } from "styled-components";
import logo from '../../assets/images/logo.png';
import { FaSignInAlt, FaRegUser } from 'react-icons/fa';

const CATEGORY = [
  {
    id: null,
    name: "전체"
  },
  {
    id: 0,
    name: "동화"
  },
  {
    id: 1,
    name: "소설"
  },
  {
    id: 2,
    name: "사회"
  },
]

const Header = () => {
  return (
    <HeaderStyle>
      {/* header에 난수화된 class가 적용되며, 
      난수화 된 class를 사용하는 이유는 의도한 컴포넌트임을 캡슐화하기 위해*/}
      <h1 className="logo">
        <img src={logo} alt="book store logo" />
      </h1>
      <nav className="category">
        <ul>
          {
            CATEGORY.map((item)=> (
              <li key={item.id}>
                <a href={item.id === null ? '/books' : `/books?category_id=${item.id}`}>
                  {item.name}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
      <nav className="auth">
        <ul>
          <li>
            <a href="/login">
              <FaSignInAlt />
              로그인
            </a>
          </li>
          <li>
            <a href="/signup">
              <FaRegUser />
              회원가입
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({theme}) => theme.layout.width.large};
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  
  align-items: center;
  border-bottom: 1px solid ${({theme}) => theme.color.border};
  
  .logo{
    img{
      width: 200px;
      margin-left: 24px;
    }
  }// logo
  
  .category {
    ul{
      display: flex;
      gap: 32px;
      li{
        a{
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({theme})=> theme.color.text};
          
          &:hover {
            color: ${({theme})=> theme.color.primary};
          }
        }
      }
    }
  }// category
  
  .auth {
    ul {
      display: flex;
      gap: 16px;
      li{
        a{
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          line-height: 1;
          
          svg{
            margin-right: 8px;
          }
        }
      }
    }
  }
`;

export default Header;