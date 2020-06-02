import styled from 'styled-components';

export const ProjectItem = styled.a`
  display: block;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  margin: 1em 0;
  padding: 1em;
  width: 100%;

  @media (min-width: 600px) {
    margin: 1em;
    flex-basis: 475px;
    transition: all 0.2s ease-in;

    :hover {
      background-color: rgba(250, 250, 250, 0.08);
    }
  }
`;

export const Name = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.p`
  margin: 10px 0 20px;
  line-height: 1.2;
`;

export const Language = styled.span`
  margin-right: 18px;

  span {
    background-color: #fd8783;
    border-radius: 50%;
    display: inline-block;
    height: 12px;
    width: 12px;
  }
`;

export const Stars = styled.span``;
