import React from 'react';
import {
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarBrand,
  MDBNavbar,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav
} from 'mdbreact';
import { BrowserRouter } from 'react-router-dom';
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
                <Link to="http://ieeebeykent.org/" target="_blank">Kurumsal</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="http://ieeebeykent.org/blog/">Blog</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="http://panel.ieeebeykent.org/">Member Backoffice</Link>
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
      </div>
    );
  }
}
