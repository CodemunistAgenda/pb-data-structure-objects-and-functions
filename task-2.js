// Task 2
const vehicle1 = {
    type: 'car',
    color: 'red',
    brand: 'Toyota',
    mileage: 55000
  };
  
  const vehicle2 = {
    type: 'truck',
    color: 'blue',
    brand: 'Ford',
    mileage: 75000
  };
  
  const vehicle3 = {
    type: 'motorcycle',
    color: 'black',
    brand: 'Honda',
    mileage: 45000
  };
  console.log(vehicle1);
  console.log(vehicle2);
  console.log(vehicle3);
  
// Task 2.1
const needsRevision = (vehicle) => {
    return vehicle.mileage > 60000;
  };
  console.log(needsRevision(vehicle1));
  console.log(needsRevision(vehicle2));
  console.log(needsRevision(vehicle3));
  
