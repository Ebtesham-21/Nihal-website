import { Container, Navbar } from 'react-bootstrap';



const Navigation = () => {
    <>
        <Navbar bg="dark" variant="dark" className="m-1 p-3">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
            </Container>
        </Navbar>
    </>
}

export default Navigation;