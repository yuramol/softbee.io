import React from 'react';
import { Link as LibLink } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(LibLink)`
  color: ${({ color }) => color};
`;

export const Link = ({ to, children, color }) => {
  return (
    <StyledLink to={to} color={color}>
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string.isRequired,
};

Link.defaultProps = {
  color: '#25BBC5',
};
