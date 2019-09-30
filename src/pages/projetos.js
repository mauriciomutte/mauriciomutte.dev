import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Layout from '../components/Layout';
import ProjectItem from '../components/ProjectItem';

const ProjectWrapper = styled.section`
  margin: 3em 5%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default ({ location }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.github.com/users/mauriciomutte/repos?sort=updated&type=owner',
      );

      const removeForkRepos = () => {
        return result.data.map((element) => {
          if (!element.fork) {
            return element;
          }
        });
      };

      const sortReposByStar = () => {
        return removeForkRepos().sort(
          (a, b) => (a.stargazers_count > b.stargazers_count) ? -1 : 1
        );
      };

      const getTopSix = () => {
        let topSix = [];

        sortReposByStar().map((element, id) => {
          if (id < 6) {
            topSix.push(element);
          }
        });
        
        return topSix;
      };

      setData(getTopSix()); 
    }

    fetchData();
  }, []);

  return (
    <Layout path={location.pathname}>
      <h1>Projetos</h1>

      <ProjectWrapper>
        {data.map(repo =>
          <ProjectItem 
            key={repo.id}
            href={repo.html_url}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            stars={repo.stargazers_count}
          />
        )}
      </ProjectWrapper>
    </Layout>
  );
}