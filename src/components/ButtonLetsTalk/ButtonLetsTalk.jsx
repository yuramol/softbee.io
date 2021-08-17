import React from 'react';
import { Button } from 'grommet';
import { string, bool, func } from 'prop-types';
import { modalOpenEvent } from '../LetsTalk';

export const ButtonLetsTalk = ({
  className,
  label,
  color,
  primary,
  onClick,
}) => {
  const openModal = () => {
    if (onClick) {
      onClick(true);
    }
    modalOpenEvent.emit();
  };

  return (
    <Button
      className={className}
      label={label}
      onClick={openModal}
      fill
      color={color}
      primary={primary}
    />
  );
};

ButtonLetsTalk.propTypes = {
  color: string,
  label: string.isRequired,
  primary: bool,
  onClick: func,
  className: string.isRequired,
};
ButtonLetsTalk.defaultProps = {
  color: 'yellow',
  primary: false,
  onClick: null,
};
