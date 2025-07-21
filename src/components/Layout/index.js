import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/bang-quynh.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = `https://thekusuma.com/static/slide-6-4715e29302dbaa2ba21494c6258298d4.jpg`;
const META_DESCRIPTION = `Bang & Quỳnh – Hành trình yêu thương từ thuở học trò đến ngày về chung một nhà. Cùng nhau viết nên chuyện tình ngọt ngào qua từng kỷ niệm và khoảnh khắc đáng nhớ.`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Bang ❤️ Quynh Wedding</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="The Wedding of Bàng & Quỳnh" />
        <meta property="og:image" content={IMAGE_URL} />
        {/* <meta property="og:url" content="https://thekusuma.com" /> */}
        <meta property="og:site_name" content="The Wedding of Bàng & Quỳnh" />
        <meta property="og:description" content={META_DESCRIPTION} />
        {/* <meta name="twitter:title" content="The Wedding of Bàng & Quỳnh" /> */}
        {/* <meta name="twitter:description" content={META_DESCRIPTION} /> */}
        {/* <meta name="twitter:image" content={IMAGE_URL} /> */}
        {/* <meta name="twitter:url" content="https://thekusuma.com" /> */}
        {/* <meta name="twitter:card" content="summary" /> */}
        {/* <meta name="twitter:creator" content="@idindrakusuma" /> */}

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
