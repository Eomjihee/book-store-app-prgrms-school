import { render, screen } from '@testing-library/react';
import Title from './Title';
import { BookStoreThemeProvider } from '../../contexts/themeContext';
// Title.tsx 테스트를 위한 tsx 파일

describe("Test [Title] Component", () => {
  it('Check Render', () => {
    // 1. 렌더
    render(
      <BookStoreThemeProvider>
        <Title size='large'>제목</Title>
      </BookStoreThemeProvider>
    );
    // 2. 확인
    expect(screen.getByText('제목')).toBeInTheDocument();
  });
  it('Check size props', () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size='large'>제목</Title>
      </BookStoreThemeProvider>
    );
    expect(container?.firstChild).toHaveStyle({
      fontSize: '2rem',
    });
  });
  it('Check color props', () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size='large' color='primary'>제목</Title>
      </BookStoreThemeProvider>
    );
    expect(container?.firstChild).toHaveStyle({
      color: '#00804c',
    });
  });
})