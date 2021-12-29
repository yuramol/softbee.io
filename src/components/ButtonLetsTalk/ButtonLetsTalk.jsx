import React from 'react';
import { string, bool, func } from 'prop-types';
import { Button } from '../../legos/Button/Button';
import { dispatch } from '../../utils/useBus';

export const ButtonLetsTalk = ({
  label,
  primary,
  color,
  outline,
  onClick,
  colorText,
}) => {
  const openModal = () => {
    if (onClick) {
      onClick(true);
    }
    dispatch('letsTalk/open');
  };

  return (
    <Button
      colorText={colorText}
      outline={outline}
      color={color}
      label={label}
      onClick={openModal}
      fill
      primary={primary}
    />
  );
};

ButtonLetsTalk.propTypes = {
  label: string.isRequired,
  primary: bool,
  onClick: func,
  colorText: string,
  color: string,
  outline: bool,
};
ButtonLetsTalk.defaultProps = {
  primary: false,
  onClick: null,
  colorText: undefined,
  color: 'accent-1',
  outline: false,
};
