import { Link } from "react-router-dom";
import { Container, UserName } from "./style";

export function Navbar() {
  return (
    <Container>
      <Link to="/">
        <strong>Phsflix</strong>
      </Link>
      
      <UserName>
        Entrar
      </UserName>
    </Container>
  );
}