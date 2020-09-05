const path = require(`path`);
const _ = require('lodash');

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  //importing tempates
  const IndexTemplate = path.resolve('./src/templates/index.template.jsx');
  const CSTemplate = path.resolve('./src/templates/cs.template.jsx');
  const RASTemplate = path.resolve('./src/templates/ras.template.jsx');
  const EATemplate = path.resolve('./src/templates/ea.template.jsx');
  const PESTemplate = path.resolve('./src/templates/pes.template.jsx');
  const WIETemplate = path.resolve('./src/templates/wie.template.jsx');
  const MemberTemplate = path.resolve('./src/templates/member.template.jsx');

  const membersQuery = `
    posts: allWordpressPost {
      nodes {
        wordpress_id
        title
        content
        categories {
          slug
          name
        }
        acf {
          e_mail
          github
          instagram
          komite
          linkedin
          name_surname
          okudugu_bolum
          resim {
            source_url
          }
        }
      }
    }
  `;

  const CSMembersQuery = ` CS: allWordpressPost(filter: {acf: {komite: {in: "Computer Society"}}}) {
    nodes {
      title
      wordpress_id
      content
      categories {
        slug
        name
      }
      acf {
        e_mail
        github
        instagram
        komite
        linkedin
        name_surname
        okudugu_bolum
        resim {
          source_url
        }
      }
    }
  }`;

  const RASMembersQuery = ` RAS: allWordpressPost(filter: {acf: {komite: {in: "Robotics & Automation Society"}}}) {
    nodes {
      title
      content
      wordpress_id
      categories {
        slug
        name
      }
      acf {
        e_mail
        github
        instagram
        komite
        linkedin
        name_surname
        okudugu_bolum
        resim {
          source_url
        }
      }
    }
  }`;

  const PESMembersQuery = ` PES: allWordpressPost(filter: {acf: {komite: {in: "Power & Energy Society"}}}) {
    nodes {
      wordpress_id
      title
      content
      categories {
        slug
        name
      }
      acf {
        e_mail
        github
        instagram
        komite
        linkedin
        name_surname
        okudugu_bolum
        resim {
          source_url
        }
      }
    }
  }`;

  const EAMembersQuery = `EA: allWordpressPost(filter: {acf: {komite: {in: "Educational Activities"}}}) {
    nodes {
      title
      content
      wordpress_id
      categories {
        slug
        name
      }
      acf {
        e_mail
        github
        instagram
        komite
        linkedin
        name_surname
        okudugu_bolum
        resim {
          source_url
        }
      }
    }
  }`;

  const WIEMembersQuery = `WIE: allWordpressPost(filter: {acf: {komite: {in: "Women in Engineering"}}}) {
    nodes {
      wordpress_id
      title
      content
      categories {
        slug
        name
      }
      acf {
        e_mail
        github
        instagram
        komite
        linkedin
        name_surname
        okudugu_bolum
        resim {
          source_url
        }
      }
    }
  }`;

  return graphql(`
    {
      ${membersQuery}
      ${CSMembersQuery}
      ${RASMembersQuery}
      ${PESMembersQuery}
      ${EAMembersQuery}
      ${WIEMembersQuery}
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    //  /                                                  index.template            -> All posts
    //  /{/$id}                                            post.template             -> Single Post


    /* CREATING ALL DATA */
    const members = result.data.posts.nodes;
    const CS = result.data.CS.nodes;
    const RAS = result.data.RAS.nodes;
    const PES = result.data.PES.nodes;
    const EA = result.data.EA.nodes;
    const WIE = result.data.WIE.nodes;
    /* CREATING ALL DATA */

    /* CREATE A UNIQUE ID FOR EACH USER */
    members.map((m,i) => (
      members[i].wordpress_id += m.wordpress_id + 10000
    ));

    CS.map((m,i) => (
      CS[i].wordpress_id += m.wordpress_id + 10000
    ));

    RAS.map((m,i) => (
      RAS[i].wordpress_id += m.wordpress_id + 10000
    ));

    PES.map((m,i) => (
      PES[i].wordpress_id += m.wordpress_id + 10000
    ));

    EA.map((m,i) => (
      EA[i].wordpress_id += m.wordpress_id + 10000
    ));

    WIE.map((m,i) => (
      WIE[i].wordpress_id += m.wordpress_id + 10000
    ));
    /* CREATE A UNIQUE ID FOR EACH USER */


    createPage({
      path: '/',
      component: IndexTemplate,
      context: {
        members: members,
        // cs: CS,
        // ras: RAS,
        // pes: PES,
        // ea: EA,
        // wie: WIE
      }
    });

    createPage({
      path : '/cs',
      component : CSTemplate,
      context : {
        members : CS
      }
    }); 

    createPage({
      path : '/ras',
      component : RASTemplate,
      context : {
        members : RAS
      }
    });

    createPage({
      path : '/ea',
      component : EATemplate,
      context : {
        members : EA
      }
    });

    createPage({
      path: '/pes',
      component : PESTemplate,
      context : {
        members : PES
      }
    })

    createPage({
      path: '/wie',
      component : WIETemplate,
      context : {
        members : WIE
      }
    })

    _.each(members, (m) => {
      createPage({
        path: `/${10000 + m.wordpress_id}`,
        component: MemberTemplate,
        context: {
          member: m
        }
      });
    });

    // _.each(categories, (c) => {
    //   createPage({
    //     path: `/${c.slug}`,
    //     component: CategoryPageTemplate,
    //     context: {
    //       posts: c
    //     }
    //   });

    //   _.each(posts, (p) => {
    //     if (p.categories[0].slug == c.slug) {
    //       createPage({
    //         path: `/${c.slug}/${p.slug}`,
    //         component: PostTemplate,
    //         context: {
    //           posts: p
    //         }
    //       });
    //     }
    //   });
    // });
  });
};
