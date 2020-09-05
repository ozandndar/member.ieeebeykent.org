import React from 'react';
import _ from 'lodash';
import MemberList from '../components/MemberList';
import Layout from '../components/layout';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: 'all'
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps.location.hash);
  // }

  // renderComputerSocietyMembers = (hash, members) => {
  //   if (hash === 'cs') {
  //     return (
  //       <div className="container">
  //         {members.map((m, i) => (
  //           <div key={i} className="member-row">
  //             {m.acf.komite[0] === 'cs' && (
  //               <MemberList
  //                 name_surname={m.acf.name_surname}
  //                 e_mail={m.acf.e_mail}
  //                 komite={m.acf.komite}
  //                 content={m.content}
  //                 okudugu_bolum={m.acf.okudugu_bolum}
  //                 resim={m.acf.resim.source_url}
  //                 linkedin={m.acf.linkedin}
  //                 github={m.acf.github}
  //                 instagram={m.acf.instagram}
  //                 id={m.wordpress_id}
  //               />
  //             )}
  //             <hr />
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   } else
  //     return (
  //       <div className="container">
  //         {members.map((m, i) => (
  //           <div key={i} className="member-row">
  //             <MemberList
  //               name_surname={m.acf.name_surname}
  //               e_mail={m.acf.e_mail}
  //               komite={m.acf.komite}
  //               content={m.content}
  //               okudugu_bolum={m.acf.okudugu_bolum}
  //               resim={m.acf.resim.source_url}
  //               linkedin={m.acf.linkedin}
  //               github={m.acf.github}
  //               instagram={m.acf.instagram}
  //               id={m.wordpress_id}
  //             />
  //             <hr />
  //           </div>
  //         ))}
  //       </div>
  //     );
  // };

  render() {
    const { pageContext: { members } } = this.props;
    if (members.length === 0 && typeof window === 'undefined') return <h1>Loading..</h1>;
    else
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
  }
}

export default IndexPage;
