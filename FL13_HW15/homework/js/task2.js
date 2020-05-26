const NUMBER30 = 30;
const NUMBER1500 = 1500;
const NUMBER2000 = 2000;

const Vehicle = function (color, engine) {
  this.color = color;
  this.engine = engine;
  this.maxSpeed = 70;

  this.model = `unknown model`;
  this.isDriving = false;
  this.currentSpeed = 0;
  this.setIntervalId;
};

Vehicle.prototype.stopMessage = function () {
  console.log(
    `Vehicle is stopped. Maximum speed during the drive was ${this.maxSpeedUntilStopped}`
  );
};

Vehicle.prototype.intervalFunc = function (func, time) {
  if (this.setIntervalId) {
    clearInterval(this.setIntervalId);
  }
  this.setIntervalId = setInterval(func, time);
};

Vehicle.prototype.upgradeEngine = function (newEngine, maxSpeed) {
  if (this.isDriving === true) {
    console.log(`Sorry but you can upgrade engine only if car is stopped.`);
  } else {
    this.engine = newEngine;
    this.maxSpeed = maxSpeed;
  }
};

Vehicle.prototype.getInfo = function () {
  let carInfo = {
    engine: this.engine,
    color: this.color,
    maxSpeed: this.maxSpeed,
    model: this.model
  };
  console.log(carInfo);
};

Vehicle.prototype.drive = function () {
  let me = this;

  if (me.isDriving === true) {
    console.log(`Already driving`);
  } else {
    let printMessage = function () {
      me.currentSpeed += 20;
      console.log(me.currentSpeed);

      if (me.currentSpeed > me.maxSpeed) {
        console.log(`Speed is too high, SLOW DOWN!`);
      }
    };

    me.intervalFunc(printMessage, NUMBER2000);
  }
  me.isDriving = true;
};

Vehicle.prototype.stop = function () {
  let me = this;
  me.maxSpeedUntilStopped = me.currentSpeed;

  let printMessage = function () {
    me.currentSpeed -= 20;
    console.log(me.currentSpeed);
    if (me.currentSpeed <= 0) {
      clearInterval(me.setIntervalId);
      me.stopMessage();
    }
  };
  me.intervalFunc(printMessage, NUMBER1500);
  me.isDriving = false;
};

const Car = function (model, color, engine) {
  Vehicle.call(this, color, engine);
  this.model = model;
  this.maxSpeed = 80;
};
Car.prototype = Object.create(Vehicle.prototype);


Car.prototype.stopMessage = function () {
    console.log(`Car ${this.model} is stopped. Maximum speed during the drive ${this.maxSpeedUntilStopped}`);
};


Car.prototype.changeColor = function (newColor) {
  if (this.color === newColor) {
    console.log(`The selected color is the same`);
  } else {
    this.color = newColor;
  }
};

const Motorcycle = function (model, color, engine) {
  Vehicle.call(this, color, engine);
  this.model = model;
  this.maxSpeed = 90;
  this.stopMessage = function () {
    console.log(`Motorcycle ${this.model} is stopped. Good drive.`);
  };
};
Motorcycle.prototype = Object.create(Vehicle.prototype);

Motorcycle.prototype.drive = function () {
  let me = this;

  if (me.isDriving === true) {
    console.log(`Already driving`);
  } else {
    console.log(`Let’s drive`);
    let printMessage = function () {
      if (me.currentSpeed - me.maxSpeed <= NUMBER30) {
        me.currentSpeed += 20;
        console.log(me.currentSpeed);

        if (me.currentSpeed > me.maxSpeed) {
          console.log(`Speed is too high, SLOW DOWN!`);
        }
      }

      if (me.currentSpeed - me.maxSpeed >= NUMBER30) {
        console.log(`Engine overheating`);
        me.currentSpeed -= 20;
        console.log(me.currentSpeed);
      }
    };
    me.intervalFunc(printMessage, NUMBER2000);
  }
  me.isDriving = true;
};