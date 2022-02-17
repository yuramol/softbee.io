import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { Box, FormField, ResponsiveContext } from 'grommet';
import { Close } from 'grommet-icons';
import { string } from 'yup';
import { useStaticQuery, graphql } from 'gatsby';

import { BoxOrder } from '../../legos/Box/BoxOrder';
import { Heading } from '../../legos/typography/Heading';
import { IconArrowStepPrev, IconArrowStepNext } from '../../legos/Icons';
import { TextInput } from '../../legos/TextInput/TextInput';
import { WrapperWizard, NavigationButton, ButtonClose } from './styled';
import { maxBreakpoints } from '../../utils/useBreakpoints';
import { sendForm } from '../../utils/useForm';
import { theme } from '../../utils/theme';

export const Wizard = ({ needBoxShadow, onClose, maxWidth }) => {
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

  const setNameFormData = dataForm => ({
    name: dataForm[1],
    website: dataForm[2],
    comment: dataForm[3],
    email: dataForm[4],
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
  const isMobile = maxBreakpoints('small', size);
  const boxShadow = isMobile
    ? '10px 10px 2px 1px #fae79f'
    : '25px 25px 2px 1px #fae79f';

  return (
    <WrapperWizard
      pad={{ vertical: 'xlarge', horizontal: 'large' }}
      boxShadow={needBoxShadow ? boxShadow : null}
      background="brand"
      justify="center"
      width={{ max: maxWidth, width: '100%' }}
      round={!needBoxShadow && isMobile ? undefined : '20px'}
      height="100%"
    >
      {onClose && isMobile && (
        <ButtonClose onClick={onClose} plain icon={<Close color="#fff" />} />
      )}

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
        height="200px"
        margin={{ horizontal: '0 auto' }}
        width="100%"
        direction="row"
        wrap={isMobile}
        align="center"
        justify="center"
      >
        {step !== 5 && (
          <NavigationButton
            onClick={() => navigate(step - 1)}
            icon={<IconArrowStepPrev />}
            margin={{ right: 'medium' }}
            plain
            colorText={theme.global.colors['accent-1']}
            disabled={step === 1}
          />
        )}

        <BoxOrder
          margin={{ bottom: isMobile ? 'medium' : undefined }}
          order={isMobile ? '-1' : undefined}
          width={{ max: isMobile ? '100%' : '660px', width: '100%' }}
        >
          <Heading
            color="#fff"
            level={2}
            fill
            margin={{ top: 'none', bottom: 'medium' }}
            textAlign={isMobile ? 'center' : 'center'}
          >
            {currentTitle}
          </Heading>
          {currentStep.placeholder && (
            <FormField>
              <TextInput
                onChange={handleTextChange}
                onKeyDown={handleKeyEvent}
                value={formData[step]}
                type={currentStep.type || 'text'}
                placeholder={currentStep.placeholder}
                dropHeight="xlarge"
                size="large"
              />
            </FormField>
          )}
        </BoxOrder>
        {step !== 5 && (
          <NavigationButton
            onClick={() => navigate(step + 1)}
            icon={<IconArrowStepNext />}
            plain
            margin={{ left: 'medium' }}
            colorText={theme.global.colors['accent-1']}
            disabled={moveForwardIsDisabled}
          />
        )}
      </Box>
    </WrapperWizard>
  );
};

Wizard.propTypes = {
  maxWidth: PropTypes.string,
  needBoxShadow: PropTypes.bool,
  onClose: PropTypes.func,
};

Wizard.defaultProps = {
  maxWidth: undefined,
  needBoxShadow: true,
  onClose: null,
};
