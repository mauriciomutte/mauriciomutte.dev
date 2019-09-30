import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const ProjectWrapper = styled.section`
  margin: 3em 5%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <h1>Projetos...</h1>

      <ProjectWrapper>
        
      </ProjectWrapper>
    </Layout>
  );
}