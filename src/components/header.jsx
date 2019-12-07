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

export class Header extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <BrowserRouter>
        <MDBNavbar color="transparent" dark expand="md">
          <MDBNavbarBrand>
            <img src={require('../assets/images/ieeelogo.svg')} alt="" className="ieee-logo"/>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="#!">Kurumsal</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Blog</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Member Backoffice</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <MDBNav className="justify-content-center committees" style={{ alignItems: 'center' }}>
          <MDBNavItem>
            <MDBNavLink active to="#!">
              <img src={require('../assets/images/cs.png')} alt="" style={{ maxWidth: '100%', width: 150 }} />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <img src={require('../assets/images/ras.png')} alt="" style={{ maxWidth: '100%', width: 150 }} />
          </MDBNavItem>
          <MDBNavItem>
            <img src={require('../assets/images/ea.png')} alt="" style={{ maxWidth: '100%', width: 150 }} />
          </MDBNavItem>
          <MDBNavItem>
            <img src={require('../assets/images/pes.png')} alt="" style={{ maxWidth: '100%', width: 150 }} />
          </MDBNavItem>
          <MDBNavItem>
            <img src={require('../assets/images/wie.png')} alt="" style={{ maxWidth: '100%', width: 150 }} />
          </MDBNavItem>
        </MDBNav>
      </BrowserRouter>
    );
  }
}
