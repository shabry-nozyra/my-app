import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import brandlogo from "../image/logo-rancak-white.png"
import '../index.css';

const NavbarComponent = () => {
    return (
        <div className="">
            {/* Navbar */}
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-5">
                    <Navbar.Brand href="#home"><img src={brandlogo} alt="" width="200px" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="/beranda" className="mr-2">Beranda</Nav.Link>
                            <Nav.Link href="/kecurangan" className="mr-2">Kecurangan</Nav.Link>
                            <Nav.Link href="/perolehansuara" className="mr-2">Perolehan Suara</Nav.Link>
                            <Nav.Link href="/tentang" className="mr-2">Tentang</Nav.Link>
                            <Nav.Link href="/kontak" className="mr-2">Kontak</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            {/* End Navbar */}
        </div >
    );
}

export default NavbarComponent;