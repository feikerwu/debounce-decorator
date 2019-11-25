/**
 * 装饰器的debounce
 * @param delay
 */
export function debounce(delay: number): Function {
  return (
    target: Function,
    propertyKey: string,
    propertyDesciptor: PropertyDescriptor
  ) => {
    const method = propertyDesciptor.value;
    let timer = null;
    propertyDesciptor.value = (...args) => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => method(...args), delay);
    };
    return propertyDesciptor;
  };
}

class Test {
  @debounce(100)
  sayHi() {
    console.log('hi');
  }
}
