import React, { useState } from "react";
import "./header.css"
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Badge, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaMicrophone, FaHeart, FaShoppingCart, FaGem, FaStore, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [jewelleryDropdownVisible, setJewelleryDropdownVisible] = useState(false);
    const [goldDropdownVisible, setGoldDropdownVisible] = useState(false);
    const [diamondDropdownVisible, setDiamondDropdownVisible] = useState(false);

    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim !== "") {
            console.log("Searching for", searchQuery);
            navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`)
        }
        else {
            console.log("No Item found");
        }
    }
    return (
        <>
            <Navbar bg="light" expand="lg" className="m-0 p-0">
                <Container className="m-0 p-0">
                    <Navbar.Brand href="/">
                        <img className="custom-navbar"
                            src="logo512.png"
                            alt="Company logo"
                            style={{ width: "60px" }}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        {/* Search Bar */}
                        <Form className="d-flex flex-grow-1 mx-3">
                            <FormControl
                                type="search"
                                placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                                className="me-2"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                            <Button onClick={handleSearch} variant="light" className="me-2">
                                <FaSearch size={20} className="me-3 align-self-center text-muted" />
                            </Button>
                            <FaMicrophone size={20} className="align-self-center text-muted" />
                        </Form>

                        {/* Right Side Nav Items */}
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link href="#diamond" className="text-muted d-flex align-items-center">
                                <FaGem className="me-1" /> DIAMOND
                            </Nav.Link>
                            <Nav.Link href="#stores" className="text-muted d-flex align-items-center">
                                <FaStore className="me-1" /> STORES
                            </Nav.Link>
                            <Nav.Link href="#account" className="text-muted d-flex align-items-center">
                                <FaUser className="me-1" /> ACCOUNT
                            </Nav.Link>
                            <Nav.Link href="#wishlist" className="text-muted d-flex align-items-center">
                                <FaHeart className="me-1" /> WISHLIST
                            </Nav.Link>
                            <Nav.Link href="#cart" className="text-muted d-flex align-items-center position-relative">
                                <FaShoppingCart className="me-1" /> CART
                                {/* Cart Badge */}
                                <Badge
                                    bg="danger"
                                    className="position-absolute top-0 start-100 translate-middle rounded-circle"
                                    style={{ fontSize: "0.75rem" }}
                                >
                                    0
                                </Badge>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar bg="light" expand="lg" className="m-0 p-0">
                <Container>
                    <Nav className="mx-0 align-items-left d-flex">
                        <Nav.Item
                            onMouseEnter={() => setJewelleryDropdownVisible(true)}
                            onMouseLeave={() => setJewelleryDropdownVisible(false)}
                            className="mx-2"
                        >
                            <NavDropdown
                                title="Jewellery Categories"
                                align="start"
                                show={jewelleryDropdownVisible}
                                onMouseEnter={() => setJewelleryDropdownVisible(true)}
                                onMouseLeave={() => setJewelleryDropdownVisible(false)}
                            >
                                <NavDropdown.Item href="#gold">Gold </NavDropdown.Item>
                                <NavDropdown.Item href="#diamond">Diamond </NavDropdown.Item>
                                <NavDropdown.Item href="#silver">Silver </NavDropdown.Item>
                                <NavDropdown.Item href="#platinum">Platinum </NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item
                            onMouseEnter={() => setGoldDropdownVisible(true)}
                            onMouseLeave={() => setGoldDropdownVisible(false)}
                            className="mx-2"
                        >
                            <NavDropdown
                                title="Gold"
                                show={goldDropdownVisible}
                                onMouseEnter={() => setGoldDropdownVisible(true)}
                                onMouseLeave={() => setGoldDropdownVisible(false)}
                            >
                                <NavDropdown.Item href="#gold">Bangles </NavDropdown.Item>
                                <NavDropdown.Item href="#diamond">Necklace </NavDropdown.Item>
                                <NavDropdown.Item href="#silver">Earrings </NavDropdown.Item>
                                <NavDropdown.Item href="#platinum">Nose Ring </NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item
                            onMouseEnter={() => setDiamondDropdownVisible(true)}
                            onMouseLeave={() => setDiamondDropdownVisible(false)}
                            className="mx-2"
                        >
                            <NavDropdown
                                title="Diamond"
                                show={diamondDropdownVisible}
                                onMouseEnter={() => setDiamondDropdownVisible(true)}
                                onMouseLeave={() => setDiamondDropdownVisible(false)}
                            >
                                <NavDropdown.Item href="#gold">Bangles </NavDropdown.Item>
                                <NavDropdown.Item href="#diamond">Necklace </NavDropdown.Item>
                                <NavDropdown.Item href="#silver">Earrings </NavDropdown.Item>
                                <NavDropdown.Item href="#platinum">Nose Ring </NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;