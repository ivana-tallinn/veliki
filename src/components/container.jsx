import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  min-width: 320px;
  max-width: 400px;
  padding-right: 14px;
  padding-left: 14px;

  @media (min-width: 768px) {
    min-width: auto;
    max-width: none;
    width: 768px;
    padding-right: 46px;
    padding-left: 46px;
  }
`;

export {
  StyledContainer as Container
};
