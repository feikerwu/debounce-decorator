function log() {
  return (
    target: Object,
    propertyKey: string,
    propertyDesciptor: PropertyDescriptor
  ): any => {
    const method = propertyDesciptor.value;

    propertyDesciptor.value = (...args) => {
      console.log(`[${new Date()}]: ${propertyKey} has been called`);
      console.log(`arguments: ${args}`);
      method(...args);
    };
    return propertyDesciptor;
  };
}

class A {
  @log()
  say(message: any) {
    console.log(message);
  }
}

let a = new A();
a.say('hello');
