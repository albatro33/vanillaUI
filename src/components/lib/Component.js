class Component {
  $target;
  state;

  constructor($target) {
    this.$target = $target;
    this.init();
    this.render();
  }

  init() {}

  renderer() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.renderer();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  setEvents() {}
}

export default Component;
