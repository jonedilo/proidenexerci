class DOMHandler {
  private rootElement: HTMLElement;

  constructor(selector: string) {
    const element = document.querySelector(selector);
    if (element) {
      this.rootElement = element as HTMLElement;
    } else {
      throw new Error(`No element found with selector: ${selector}`);
    }
  }

  public updateText(newText: string): void {
    this.rootElement.textContent = newText;
  }

  public addClass(className: string): void {
    this.rootElement.classList.add(className);
  }

  // Additional methods can be added here to handle other DOM operations
}

// Usage
try {
  const dom = new DOMHandler('#app');
  dom.updateText('Hello, TypeScript!');
  dom.addClass('active');
} catch (error) {
  console.error(error);
}
