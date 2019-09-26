import React from 'react';
import Layout from '../components/Layout';

export default ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <h1>Sobre...</h1>
    </Layout>
  );
}