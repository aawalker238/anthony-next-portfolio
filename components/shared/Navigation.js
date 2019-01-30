import React, { Component } from 'react';
import Link from 'next/link';
import auth0 from '../../services/auth0';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Login = () => {
  return (
    <span onClick={auth0.login} className="nav-link port-navbar-link clickable">
      Login
    </span>
  );
};

const Logout = () => {
  return (
    <span
      onClick={auth0.logout}
      className="nav-link port-navbar-link clickable"
    >
      Logout
    </span>
  );
};

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isAuthenticated } = this.props;

    return (
      <div>
        <Navbar
          className="port-navbar port-default"
          color="dark"
          dark
          expand="md"
        >
          <NavbarBrand className="port-navbar-brand" href="/">
            Anthony Walker
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <Link href="/">
                  <a className="nav-link port-navbar-link">Home</a>
                </Link>
              </NavItem>
              <NavItem className="port-navbar-item">
                <Link href="/about">
                  <a className="nav-link port-navbar-link">About</a>
                </Link>
              </NavItem>
              <NavItem className="port-navbar-item">
                <Link href="/portfolio">
                  <a className="nav-link port-navbar-link">Portfolio</a>
                </Link>
              </NavItem>
              <NavItem className="port-navbar-item">
                <Link href="/blog">
                  <a className="nav-link port-navbar-link">Blog</a>
                </Link>
              </NavItem>
              <NavItem className="port-navbar-item">
                <Link href="/resume">
                  <a className="nav-link port-navbar-link">Resume</a>
                </Link>
              </NavItem>
              <NavItem className="port-navbar-item">
                <Link href="/contact">
                  <a className="nav-link port-navbar-link">Contact</a>
                </Link>
              </NavItem>
              {isAuthenticated ? (
                <NavItem className="port-navbar-item">
                  <Link href="/logout">
                    <Logout />
                  </Link>
                </NavItem>
              ) : (
                <NavItem className="port-navbar-item">
                  <Link href="/login">
                    <Login />
                  </Link>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
