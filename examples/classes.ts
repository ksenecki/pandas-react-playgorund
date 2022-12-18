class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  public drive(): void {
    console.log('chugga chugga');
  }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  public drive(): void {
    console.log('vruuum');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, 'orange');
car.drive();
