import React from 'react';
import { Button } from 'grommet';
import { shape, string, bool, func } from 'prop-types';
import { modalOpenEvent } from '../LetsTalk';

export const ButtonLetsTalk = ({
  labelButton,
  styleButton,
  colorButton,
  primaryButton,
  onClickButton,
}) => {
  const openModal = () => {
    if (onClickButton) {
      onClickButton(true);
    }
    modalOpenEvent.emit();
  };

  return (
    <Button
      label={labelButton}
      onClick={openModal}
      fill
      color={colorButton}
      style={styleButton}
      primary={primaryButton}
    />
  );
};

ButtonLetsTalk.propTypes = {
  styleButton: shape({
    boxShadow: string,
    textDecoration: string,
    fontSize: string,
  }),
  colorButton: string,
  labelButton: string.isRequired,
  primaryButton: bool,
  onClickButton: func,
};
ButtonLetsTalk.defaultProps = {
  styleButton: {},
  colorButton: 'yellow',
  primaryButton: false,
  onClickButton: null,
};
