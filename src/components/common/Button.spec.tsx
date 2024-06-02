import { render, screen } from '@testing-library/react';
import Button from './Button';
import { BookStoreThemeProvider } from '../../contexts/themeContext';
// Button.tsx 테스트를 위한 tsx 파일

describe("Test [Button] Component", () => {
  it('Check Render', () => {
    // 1. 렌더
    render(
      <BookStoreThemeProvider>
        <Button size='large' scheme="normal" disabled={false} isLoading={false} >버튼</Button>
      </BookStoreThemeProvider>
    );
    // 2. 확인
    expect(screen.getByText('버튼')).toBeInTheDocument();
  });
  it('Check size props', () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size='large' scheme="normal" disabled={false} isLoading={false} >버튼</Button>
      </BookStoreThemeProvider>
    );
    expect(screen.getByRole("button")).toHaveStyle({
      fontSize: '1.5rem',
    });
  });
});