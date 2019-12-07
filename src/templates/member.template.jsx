import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
// import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon } from 'mdbreact';
import Layout from '../components/layout';
// import SEO from '../components/seo';

const MemberPage = ({ pageContext: { member } }) => {
  console.log(member);
  return <div>{member.title}</div>;
};

export default MemberPage;
