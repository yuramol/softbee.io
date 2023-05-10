import { sendSlack } from './useSlack';

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

export const sendForm = (formName, input) => {
  sendSlack(
    `Name: ${input.name}\n Website: ${input.website}\n Email: ${input.email}\n Comment: ${input.comment}\n`,
  );
  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': formName, ...input }),
  });
};
