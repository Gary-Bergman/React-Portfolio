import React from "react";
import { Nav, Container, Row } from "reactstrap";


function FooterNav() {
    return (
        <>
            <footer>
                <Nav className="fixed-bottom mt-5 navbar navbar-expand-lg navbar-light bg-light">
                    <Container className="footerIcons">
                        <Row className="mx-auto">
                            {/* <!-- Github --> */}
                            <a className="col pr-5" href="https://github.com/Gary-Bergman" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"
                                aria-hidden="true"></i> </a>
                            {/* <!-- Email --> */}
                            <a className="col x-5" href="mailto:garybergman00@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"
                                aria-hidden="true"></i> </a>
                            {/* <!-- LinkedIn --> */}
                            <a className="col pl-5" href="https://www.linkedin.com/in/gary-bergman/" target="_blank" rel="noopener noreferrer"><i
                                className="fa fa-linkedin" aria-hidden="true"></i> </a>
                            {/* <!-- Phone --> */}
                            <a className="col pl-5" href="tel:4797151009" target="_blank" rel="noopener noreferrer"><i className="fa fa-phone"
                                aria-hidden="true"></i> </a>
                            {/* <!-- Resume --> */}
                            <a className="col pl-5"
                                href="https://drive.google.com/file/d/1F94wdjv8yIpOelPrx8zTdHZbk0UAFvru/view?usp=sharing"
                                target="_blank" rel="noopener noreferrer"><i className="fa fa-file-text-o" aria-hidden="true"></i> </a>

                        </Row>
                    </Container>
                </Nav>
            </footer>
        </>
    )
}
export default FooterNav;