import React, { useMemo, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Box, Button, FormField, Grid, ResponsiveContext, Text } from 'grommet';
import { Close, Next, Previous } from 'grommet-icons';

import { string } from 'yup';
import { TextInput } from '../legos/TextInput/TextInput';

import { maxBreakpoints } from '../utils/useBreakpoints';
import { sendForm } from '../utils/useForm';

const StyledGrid = styled(Grid)`
  width: 100%;
  background-color: #104065;
  box-shadow: ${props => props.boxShadow};
  color: #fae79f;
  border-radius: ${props => props.borderRadius};
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
    border-color: #fff;
    opacity: 1;
  }
`;

const headingSizes = {
  large: '42px',
  medium: '30px',
  small: '22px',
};

export const Wizard = ({ style, needBoxShadow, onClose }) => {
  const { data } = useStaticQuery(
    graphql`
      query {
        data: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "common" } } }
        ) {
          edges {
            node {
              frontmatter {
                form {
                  list {
                    title
                    placeholder
                  }
                  submission
                }
              }
            }
          }
        }
      }
    `,
  );
  const { form } = data.edges[0].node.frontmatter;

  const wizardSteps = [...form.list];
  wizardSteps[Object.values(form.list).length - 1].type = 'email';
  wizardSteps.push({ title: form.submission });

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

  const emailFieldValidator = string()
    .email()
    .required();

  const moveForwardIsDisabled = useMemo(() => {
    if (currentStep.type === 'email') {
      return !emailFieldValidator.isValidSync(formData[step]);
    }
    return step === wizardSteps.length || formData[step].length === 0;
  }, [step, formData]);

  const setNameFormData = data => ({
    name: data[1],
    website: data[2],
    comment: data[3],
    email: data[4],
  });

  const navigate = to => {
    setStep(to);

    if (onClose && to === wizardSteps.length) {
      sendForm('lets-started', setNameFormData(formData), () => {
        setTimeout(() => onClose(), 3000);
      });
    } else if (to === wizardSteps.length) {
      sendForm('lets-started', setNameFormData(formData));
    }
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
  const columnsCount = 1;
  const isMobile = maxBreakpoints('mobile', size);
  const boxShadow = isMobile ? '10px 10px 2px 1px' : '25px 25px 2px 1px';

  const headingSize = headingSizes[size];

  return (
    <StyledGrid
      columns={{ count: columnsCount, size: 'auto' }}
      pad={!isMobile ? { vertical: 'medium', horizontal: 'xlarge' } : 'small'}
      margin="none"
      justify="center"
      boxShadow={needBoxShadow ? boxShadow : null}
      round
      style={style}
      borderRadius={isMobile ? 0 : '20px'}
      gap="small"
    >
      <form
        name="lets-started"
        method="post"
        action="/contact/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="lets-started" />
        <input type="text" name="name" />
        <input type="text" name="website" />
        <input type="email" name="email" />
        <textarea name="comment" />
      </form>
      <Box
        style={{ textAlign: 'center', maxHeight: isMobile ? '377px' : 'auto' }}
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
              margin={{ vertical: isMobile ? 'large' : 'medium' }}
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
        {onClose && isMobile && (
          <Box align="center" fill>
            <Button
              onClick={onClose}
              label="Close"
              primary
              color="accent-1"
              icon={<Close color="brand" />}
            />
          </Box>
        )}
      </Box>
    </StyledGrid>
  );
};

Wizard.propTypes = {
  style: PropTypes.shape({
    maxWidth: PropTypes.string,
    height: PropTypes.string,
  }),
  needBoxShadow: PropTypes.bool,
  onClose: PropTypes.func,
};

Wizard.defaultProps = {
  style: {},
  needBoxShadow: true,
  onClose: null,
};
