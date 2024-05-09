export class Car {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  desligar(): void {
    this.motor.desligar();
  }

  parar(): void {
    this.motor.parar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado');
  }

  desligar(): void {
    console.log('Motor está desligado');
  }

  parar(): void {
    console.log('O carro está parando');
  }

  acelerar(): void {
    console.log('O carro está acelerando');
  }
}

const newCar = new Car();
newCar.ligar();
newCar.acelerar();
newCar.parar();
newCar.desligar();
