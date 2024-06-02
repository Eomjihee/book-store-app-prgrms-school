import { useContext } from "react";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import Layout from "./components/layout/Layout";
import { BookStoreThemeProvider, ThemeContext } from "./contexts/themeContext";
import Home from "./pages/Home";

function App() {
  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
      {/* 추후 Home 컴포넌트를 라우팅을 통해 유동적으로 넣어줄 수 있도록 처리 */}
      {/* 아래와 동일한 코드 = <Layout children={<Home />} /> */}
      <Layout>
        <Home />
      </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
