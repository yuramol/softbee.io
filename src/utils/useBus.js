const subscribers = [];

const subscribe = (filter, callback) => {
  subscribers.push([filter, callback]);
};

export const dispatch = type => {
  subscribers.forEach(([eventType, callback]) => {
    if (eventType !== type) return;

    callback();
  });
};

const useBus = (type, callback) => {
  subscribe(type, callback);

  return dispatch;
};

export default useBus;
