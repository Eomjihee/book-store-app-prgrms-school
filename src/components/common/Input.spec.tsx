import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../contexts/themeContext";
import InputText from "./InputText";
import React from "react";
// Input Text.tsx 테스트를 위한 tsx 파일

describe("Test [Input Text] Component", () => {
  it("Check Render", () => {
    // 1. 렌더
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="여기에 입력" />
      </BookStoreThemeProvider>
    );
    // 2. 확인
    expect(screen.getByPlaceholderText("여기에 입력")).toBeInTheDocument();
  });
  it("Test forwardRef function", () => {
    // ref를 렌더할 때 전달하여 제대로 ref가 동작하는지 확인 
    const ref = React.createRef<HTMLInputElement>();
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="여기에 입력" ref={ref} />
      </BookStoreThemeProvider>
    );
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  })
});
