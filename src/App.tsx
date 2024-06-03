import {
  createBrowserRouter,
  RouterProvider, // router를 render하고자 할 때 사용
} from "react-router-dom";
import Error from "./components/common/Error";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import Layout from "./components/layout/Layout";
import { BookStoreThemeProvider } from "./contexts/themeContext";
import Home from "./pages/Home";

const router = createBrowserRouter([
  // 배열로 세부 설정 가능
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Layout><Error /></Layout>,
  },
  {
    path: "/books",
    element: <Layout><div>도서 목록</div></Layout>,
    errorElement: <Layout><Error /></Layout>,
  },
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
      {/* 추후 Home 컴포넌트를 라우팅을 통해 유동적으로 넣어줄 수 있도록 처리 */}
      {/* 아래와 동일한 코드 = <Layout children={<Home />} /> */}
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
