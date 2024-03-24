const car = {
    wheelCount: 5,
    color: "Green",
    topSpeed: 200,
    address: {
        street: "50 Main st",
        city: "Boston",
        state: "MA",
    },
    doubleTopSpeed: function() {
        return this.topSpeed * 2;
    },
    doubleTopSpeed2: () => {
        return this.topSpeed * 2;
    }
}

console.log(car.wheelCount)
console.log(car.color)

console.log(car.address.street)
console.log(car.doubleTopSpeed())

