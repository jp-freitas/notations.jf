import { Header } from "../../components/Header";
import { Container, Content } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header />
      <Content>
        <h1>Content</h1>
      </Content>
    </Container>
  );
}