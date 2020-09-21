import React from 'react';
import {
  MDBNav,
  MDBNavItem,
  // MDBNavLink,
  MDBNavbarBrand,
  MDBNavbar,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav
} from 'mdbreact';
// import { BrowserRouter } from 'react-router-dom';
// import { Router, Link } from '@reach/router';
import { Link } from 'gatsby';

export class Header extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <MDBNavbar color="transparent" dark expand="md">
          <MDBNavbarBrand>
            <Link to="/">
              <img src={require('../assets/images/ieeelogo.svg')} alt="" className="ieee-logo" />
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <a href="http://ieeebeykent.org/" target="_blank" rel="noreferrer">Kurumsal</a>
              </MDBNavItem>
              <MDBNavItem>
                <a href="http://ieeebeykent.org/blog/" target="_blank" rel="noreferrer">Blog</a>
              </MDBNavItem>
              <MDBNavItem>
                <a href="http://panel.ieeebeykent.org/" target="_blank" rel="noreferrer">Member Backoffice</a>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <MDBNav className="justify-content-center committees" style={{ alignItems: 'center' }}>
          <MDBNavItem>
            <Link to="/cs">
              <img src={require('../assets/images/cs.png')} alt="" style={{ maxWidth: '100%', width: 150 }} />
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="/ras">
              <img src={require('../assets/images/ras.png')} alt="" style={{ maxWidth: '100%', width: 150 }} />
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="/ea">
              <img src={require('../assets/images/ea.png')} alt="" style={{ maxWidth: '100%', width: 150 }} />
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="/pes">
              <img src={require('../assets/images/pes.png')} alt="" style={{ maxWidth: '100%', width: 150 }} />
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="/wie">
              <img src={require('../assets/images/wie.png')} alt="" style={{ maxWidth: '100%', width: 150 }} />
            </Link>
          </MDBNavItem>
        </MDBNav>

        <div className="mobile-menu">
          <h2>Komiteler</h2>
          <div className="komite-list">
            <Link to="/">Tumu</Link>
            <Link to="/cs">Computer Society</Link>
            <Link to="/ras">Robotics And Automation Society</Link>
            <Link to="/pes">Power And Energy Society</Link>
            <Link to="/ea">Educational Activities</Link>
            <Link to="/wie">Women In Engineering</Link>
          </div>
        </div>
      </div>
    );
  }
}
