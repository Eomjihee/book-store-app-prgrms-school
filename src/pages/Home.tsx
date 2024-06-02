import Button from "../components/common/Button"
import Title from "../components/common/Title"

const Home = () => {
  return (
    <>
      <Title size="large">
        제목 테스트1
      </Title>
      <Title size="medium" color="secondary">
        제목 테스트2
      </Title>
      <Title size="small">
        제목 테스트3
      </Title>
      <Button size="large" scheme="normal" disabled={false} isLoading={false} >버튼 테스트</Button>
      <div>home body</div>
    </>
  )
}

export default Home