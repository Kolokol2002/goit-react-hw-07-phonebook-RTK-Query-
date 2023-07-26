import { Container, MainTitle } from './Title.styled';
import PropTypes from 'prop-types';

const Title = ({ title, children }) => {
  return (
    <Container>
      <MainTitle>{title}</MainTitle>
      {children}
    </Container>
  );
};

Title.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Title;
