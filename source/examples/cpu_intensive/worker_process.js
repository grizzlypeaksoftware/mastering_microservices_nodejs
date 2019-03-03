//const { sleep } = require('sleep');
process.on('message', ({ customerID }) => {
  //sleep(5); // ARTIFICIAL CPU INTENSIVE
  let data = {};
  switch (customerID) {
    case 'customer1':
      data.address="4141 Sycamore St";
      break;
    default:
      break;
  }
  process.send({ data : data});
});