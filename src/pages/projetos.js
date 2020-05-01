import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Layout from '../components/Layout';
import ProjectItem from '../components/ProjectItem';
import SEO from '../components/SEO';

const ProjectWrapper = styled.section`
  margin: 3em 5%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Projetos = ({ location }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    }

    if (data) {
      fetchData();
    }
  }, []);

  return (
    <Layout path={location.pathname}>
      <SEO title="Projetos" />
      <ProjectWrapper>
        {
          isLoading 
          ? <div>Carregando...</div>
          : data.map(repo =>
            <ProjectItem 
              key={repo.id}
              href={repo.html_url}
              name={repo.name}
              description={repo.description}
              language={repo.language}
              stars={repo.stargazers_count}
            />
          ) 
        }
      </ProjectWrapper>
    </Layout>
  );
}

export default Projetos;