export default class Event {
  constructor() {
    this.listeners = [];
    this.listenersOnce = [];
  }

  on(listener) {
    this.listeners.push(listener);
    return {
      dispose: () => this.off(listener),
    };
  }

  once(listener) {
    this.listenersOnce.push(listener);
  }

  off(listener) {
    const callbackIndex = this.listeners.indexOf(listener);
    if (callbackIndex > -1) this.listeners.splice(callbackIndex, 1);
  }

  emit(event) {
    this.listeners.forEach(listener => listener(event));

    if (this.listenersOnce.length > 0) {
      const toCall = this.listenersOnce;
      this.listenersOnce = [];
      toCall.forEach(listener => listener(event));
    }
  }

  pipe(te) {
    return this.on(e => te.emit(e));
  }
}
