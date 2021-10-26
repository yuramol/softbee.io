const SLACK_TOKEN = 'xoxb-440799965478-2617126290705-fQc9qMK58mso2e4etAQc2xfm';
const SLACK_CHANNEL = 'C02HBQYSZ47';

export const sendSlack = text => {
  const body = `token=${SLACK_TOKEN}&channel=${SLACK_CHANNEL}&text=${text}`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  };
  fetch('https://slack.com/api/chat.postMessage', requestOptions);
};
