import React from 'react';

import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout';

function AboutPage({ location }) {
  return (
    <Layout path={location.pathname}>
      <SEO title="Sobre" />
      <h1>AboutPage</h1>
    </Layout>
  );
}

export default AboutPage;
