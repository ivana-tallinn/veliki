import styled from 'styled-components';
import { BaseField } from '../helpers/base-field';

const StyledInput = styled(BaseField).attrs({
  as: 'input'
})`
  padding-top: 3px;
  padding-right: 7px;
  padding-bottom: 3px;
  padding-left: 7px;
`;

export {
  StyledInput as Input
};
