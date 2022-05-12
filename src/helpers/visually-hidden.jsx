import styled from 'styled-components';

const StyledVisuallyHidden = styled.div`
  position: absolute;

  margin: -1px;
  width: 1px;
  height: 1px;
  border: 0;
  padding: 0;

  white-space: nowrap;

  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export {
  StyledVisuallyHidden as VisuallyHidden
};
