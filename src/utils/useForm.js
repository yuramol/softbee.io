import { sendSlack } from './useSlack';

export const sendForm = (formName, input) => {
  sendSlack(
    ` Name: ${input.name}\n Website: ${input.website}\n Email: ${input.email}\n Comment: ${input.comment}\n`,
  );
};
