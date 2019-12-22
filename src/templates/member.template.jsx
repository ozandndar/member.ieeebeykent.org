import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const MemberPage = ({ pageContext: { member } }) => {
  console.log(member);
  return (
    <Layout>
      <div id="single-member" className="container">
        <div className="container text-center">
          <div className="gap-50"></div>
          <div className="row">
            <div className="col-md-6">
              <img src={member.acf.resim.source_url} alt="" className="img" />
            </div>
            <div className="col-md-6">
              <h1 className="single-member-name">{member.title}</h1>
              <span className="member-department">
                <strong>{member.acf.okudugu_bolum}</strong>
              </span>
              <div className="member-all-commitees">
                {member.acf.komite.map((r, i) => (
                  <li className="member-commitees" key={i}>
                    {r}
                  </li>
                ))}
              </div>
              <p className="single-member-content" dangerouslySetInnerHTML={{ __html: member.content }}></p>
              <a className="member-mail show-on-mobile" href={`mailto:${member.acf.e_mail}`}>
                {member.acf.e_mail}
              </a>
              <div className="social-icons">
                {member.acf.linkedin && (
                  <div className="single-social-icon">
                    <a href={member.acf.linkedin} target="_blank">
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                )}
                {member.acf.github && (
                  <div className="single-social-icon">
                    <a href={member.acf.github} target="_blank">
                      <i className="fab fa-github" />
                    </a>
                  </div>
                )}
                {member.acf.instagram && (
                  <div className="single-social-icon">
                    <a href={member.acf.instagram} target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                )}
              </div>

            </div>
          </div>

          <div className="gap-50"></div>
          <div className="gap-50"></div>
          <div className="gap-50"></div>

        </div>
      </div>
    </Layout>
  );
};

export default MemberPage;
