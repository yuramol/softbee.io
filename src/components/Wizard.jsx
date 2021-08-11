import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';

import { Box, Button, FormField, Grid, ResponsiveContext, Text } from 'grommet';
import { Next, Previous } from 'grommet-icons';

import { TextInput } from '../legos/TextInput/TextInput';
import { validateEmail } from '../utils/helpers';

const StyledGrid = styled(Grid)`
  width: 100%;
  background-color: #104065;
  box-shadow: ${props => props.boxShadow};
  color: #fae79f;
  border-radius: 20px;
`;
const StyledHeading = styled(Text)`
  font-weight: 600;
  ${props =>
    props.preLine &&
    css`
      white-space: pre-line;
    `}
`;
const NavigationButton = styled(Button)`
  height: 42px;
  display: flex;
  align-items: center;
  border-radius: 2px;
`;
const StepButton = styled(Button)`
  width: 66px;
  height: 0;
  margin: 0 7px;
  padding: 0;

  &:disabled {
    border-color: #ffffff;
    opacity: 1;
  }
`;

const wizardSteps = [
  {
    title: `Hey! Let’s get started. We’re SoftBee,\n and you are? 👋`,
    placeholder: 'Lovely Person',
  },
  {
    title: 'Hello, {name}! What do you want\n to make with us?',
    placeholder: 'Apps, a website ?',
  },
  {
    title: 'Is there any other information you can\n share?',
    placeholder: 'Budget / Timeframe?',
  },
  {
    title: 'Please provide your email\n 📧',
    placeholder: 'best@customer.com',
    type: 'email',
  },
  { title: 'Thank you for your submission! 🎉' },
];

const headingSizes = {
  large: '42px',
  medium: '30px',
  small: '22px',
};

export const Wizard = ({ style }) => {
  const initialWizardState = {};

  for (let i = 1; i <= wizardSteps.length; i += 1) {
    initialWizardState[i] = '';
  }

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialWizardState);

  const currentStep = useMemo(() => wizardSteps[step - 1], [step]);
  const currentTitle = useMemo(() => {
    const { title } = currentStep;

    if (step === 2) {
      return title.replace('{name}', formData[1]);
    }

    return title;
  }, [step]);

  const moveForwardIsDisabled = useMemo(() => {
    if (currentStep.type === 'email') {
      return !validateEmail(formData[step]);
    }
    return step === wizardSteps.length || formData[step].length === 0;
  }, [step, formData]);

  const navigate = to => {
    setStep(to);
  };

  const handleTextChange = e => {
    setFormData({ ...formData, [step]: e.target.value });
  };
  const handleKeyEvent = e => {
    if (e.key === 'Enter' && !moveForwardIsDisabled) {
      navigate(step + 1);
    }
  };

  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 1;
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const boxShadow = isMobile ? '10px 10px 2px 1px' : '25px 25px 2px 1px';

  const headingSize = headingSizes[size];

  return (
    <StyledGrid
      columns={{ count: columnsCount, size: 'auto' }}
      pad={!isMobile ? { vertical: 'medium', horizontal: 'xlarge' } : 'small'}
      margin={isMobile ? 'medium' : undefined}
      justify="center"
      boxShadow={boxShadow}
      round
      style={style}
      gap="small"
    >
      <Box
        style={{ textAlign: 'center' }}
        pad={isMobile ? { vertical: 'xlarge', horizontal: 'medium' } : 'medium'}
        justify="center"
        align="start"
        fill
      >
        <StyledHeading
          justify="center"
          textAlign="start"
          size={headingSize}
          color="white"
          margin="xsmall"
          preLine={size === 'large'}
        >
          {currentTitle}
        </StyledHeading>
        {currentStep.placeholder && (
          <>
            <Box pad={{ top: 'large' }} height="xlarge" fill>
              <FormField style={{ minHeight: 'auto' }}>
                <TextInput
                  onChange={handleTextChange}
                  onKeyDown={handleKeyEvent}
                  value={formData[step]}
                  type={currentStep.type || 'text'}
                  placeholder={currentStep.placeholder}
                  dropHeight="xlarge"
                  size="medium"
                />
              </FormField>
            </Box>
            <Box
              direction="row"
              justify="center"
              margin={{ top: 'medium', bottom: 'medium' }}
              fill
            >
              <NavigationButton
                onClick={() => navigate(step - 1)}
                label={<Previous color="brand" />}
                margin={{ right: 'medium' }}
                color="accent-1"
                primary
                disabled={step === 1}
              />
              <NavigationButton
                onClick={() => navigate(step + 1)}
                label={<Next color="brand" />}
                margin={{ left: 'medium' }}
                color="accent-1"
                primary
                disabled={moveForwardIsDisabled}
              />
            </Box>
            <Box
              direction="row"
              justify="center"
              fill
              margin={{ top: 'medium' }}
            >
              {wizardSteps.map(
                (s, i) =>
                  i < wizardSteps.length - 1 && (
                    <StepButton
                      onClick={() => navigate(i + 1)}
                      disabled={step <= i}
                      color="accent-1"
                      primary
                      key={s.title}
                    />
                  ),
              )}
            </Box>
          </>
        )}
      </Box>
    </StyledGrid>
  );
};

Wizard.propTypes = {
  style: PropTypes.shape({ maxWidth: PropTypes.string }),
};

Wizard.defaultProps = {
  style: {},
};
