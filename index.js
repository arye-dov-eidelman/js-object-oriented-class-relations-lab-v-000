const store = {drivers: [], trips: [], passengers: []}

var driverCount = 0;
var passengerCount = 0;
var tripCount = 0;

class Driver{
  constructor(name){
    this.name = name;
    this.id = ++driverCount;
    store.drivers.push(this);

    return this;
  }

  trips(){
    return store.trips.filter(
      function(trip){ return trip.driverId === this.id}.bind(this)
    )
  }

  passengers(){
    return this.trips().map(trip => trip.passenger())
  }
}

class Passenger{
  constructor(name){
    this.name = name;
    this.id = ++passengerCount;
    store.passengers.push(this);

    return this;
  }

  trips(){
    return store.trips.filter(
      function(trip){ return trip.passengerId === this.id}.bind(this)
    )
  }

  drivers(){
    return this.trips().map(trip => trip.driver())
  }
}

class Trip{
  constructor(driver, passenger){
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripCount;
    store.trips.push(this);
    return this;
  }

  driver(){
    return store.drivers.find(
      function(driver){ return driver.id === this.driverId}.bind(this)
    )
  }

  passenger(){
    return store.passengers.find(
      function(passenger){ return passenger.id === this.passengerId}.bind(this)
    )
  }
}
