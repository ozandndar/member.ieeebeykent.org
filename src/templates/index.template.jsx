// src/pages/index.js
import React from 'react';
import _ from 'lodash';
import MemberList from '../components/MemberList';
import Layout from '../components/layout';

const IndexPage = ({ pageContext: { members } }) => {
  return (
    <Layout>
      <div>
        <div style={{ height: 50 }} />
        <div className="container">
          {members.map((m, i) => (
            <div key={i} className="member-row">
              <MemberList
                name_surname={m.acf.name_surname}
                e_mail={m.acf.e_mail}
                komite={m.acf.komite}
                content={m.content}
                okudugu_bolum={m.acf.okudugu_bolum}
                resim={m.acf.resim.source_url}
                linkedin={m.acf.linkedin}
                github={m.acf.github}
                instagram={m.acf.instagram}
                id={m.wordpress_id}
              />
              <hr />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;