import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RouterLink } from '../../legos/RouterLink';

export const BlogItemLink = ({ slug, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <RouterLink {...rest} to={`/blog${slug}`} />
);

BlogItemLink.propTypes = {
  slug: PropTypes.string.isRequired,
};

export const ImgLink = styled(BlogItemLink)`
  display: block;
  height: auto;
  margin-bottom: 20px;
  max-width: 970px;
  object-fit: cover;
  padding-bottom: 35%;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
`;
