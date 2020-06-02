import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

function page404() {
  return (
    <Layout>
      <SEO title="404" />
      <h1>404... aaaaa</h1>
      <Link to={'/'}>Voltar para home</Link>
    </Layout>
  );
}

export default page404;
