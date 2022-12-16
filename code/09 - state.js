class AbstractState {
  context;
  activate(request) {}
  loadData() {}
}

class LoadingState extends AbstractState {
  activate() {
    this.context.startAnimation();
    this.context.clearData();
  }
  loadData() {
    return; //do nothing
  }
}
class ErrorState extends AbstractState {
  activate() {
    this.context.stopAnimation();

    this.context.clearData();

    this.context.showErrorModal();
  }
  message() {
    return "Error";
  }
  loadData() {
    this.context.loadData();
  }
}
class LoadedState extends AbstractState {
  activate() {
    this.context.stopAnimation();

    this.context.showData();
  }
  loadData() {
    this.context.loadData();
  }
  message() {
    return "Loaded succesfully";
  }
}

class EmptyState extends AbstractState {
  activate() {
    this.context.stopAnimation();

    this.context.showEmptyImage();
  }
  loadData() {
    this.context.loadData();
  }
  message() {
    return "Loaded succesfully but no data";
  }
}
