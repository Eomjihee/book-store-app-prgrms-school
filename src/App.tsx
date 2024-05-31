
import Layout from './components/layout/Layout';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      {/* 추후 Home 컴포넌트를 라우팅을 통해 유동적으로 넣어줄 수 있도록 처리 */}
      {/* 아래와 동일한 코드 = <Layout children={<Home />} /> */}
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
