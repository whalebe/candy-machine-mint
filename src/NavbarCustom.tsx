import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarCustom = (props: any) => {
  
  return (
    <div>
      <Navbar expand="lg">
        {/* bg="light" */}
        <Container>
          <Navbar.Brand className= "text-white " href="/"><span style={{fontWeight: "bold"}}>shapes</span></Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link className="text-white" href ="https://twitter.com/shapesOfSolana" >Twitter </Nav.Link><Nav.Link className="text-white" href ="https://discord.gg/BjEB2X5yzw" >Discord</Nav.Link>{props.walletAddress && <Nav.Link className="text-white" onClick={props.clicked}>{props.balance} SOL: {props.walletAddress}</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarCustom;
