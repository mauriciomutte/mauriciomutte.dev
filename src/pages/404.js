import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

function page404() {
  return (
    <Layout>
      <SEO title="404" />
      <h1>404...</h1>
    </Layout>
  );
}

export default page404;