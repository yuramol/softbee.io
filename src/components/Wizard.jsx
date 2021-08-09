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
  display: flex;
  align-items: center;
  border-radius: 2px;
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
    title: 'Please provide your email 📧',
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
  const moveForwardIsDisabled = useMemo(() => {
    if (currentStep.type === 'email') {
      return !validateEmail(formData[step]);
    }
    return step === wizardSteps.length || formData[step].length === 0;
  }, [step, formData]);

  const navigate = (forward = true) => {
    if (
      !((step === 1 && !forward) || (step === wizardSteps.length && forward))
    ) {
      setStep(forward ? step + 1 : step - 1);
    }
  };

  const handleTextChange = e => {
    setFormData({ ...formData, [step]: e.target.value });
  };
  const handleKeyEvent = e => {
    if (e.key === 'Enter' && !moveForwardIsDisabled) {
      navigate();
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
          {currentStep.title}
        </StyledHeading>
        {currentStep.placeholder && (
          <>
            <Box pad={{ top: 'large' }} fill>
              <FormField>
                <TextInput
                  onChange={handleTextChange}
                  onKeyDown={handleKeyEvent}
                  value={formData[step]}
                  type={currentStep.type || 'text'}
                  placeholder={currentStep.placeholder}
                  style={{ paddingBottom: '30px' }}
                />
              </FormField>
            </Box>
            <Box
              direction="row"
              justify="center"
              margin={{ top: 'medium' }}
              fill
            >
              <NavigationButton
                onClick={() => navigate(false)}
                label={<Previous color="brand" />}
                margin={{ right: 'medium' }}
                color="accent-1"
                primary
                disabled={step === 1}
              />
              <NavigationButton
                onClick={navigate}
                label={<Next color="brand" />}
                margin={{ left: 'medium' }}
                color="accent-1"
                primary
                disabled={moveForwardIsDisabled}
              />
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
