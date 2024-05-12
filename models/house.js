const houses = [
    { 
        id: 1,  
        address: '555 Crab Crawl Dr, Mexico Beach, FL 32456',
        numberOfBedrooms: '3',
        numberOfBathrooms: '2',
        hasPorch: true,
        porchHasSwing: true,
        price: '475,940.00'
    },
    { 
        id: 2,  
        address: '105 Whirlwind Ct, Windmark Beach, FL 32456',
        numberOfBedrooms: '4',
        numberOfBathrooms: '3',
        hasPorch: true,
        porchHasSwing: true,
        price: '1,225,000.00'
    },
    { 
        id: 3,  
        address: '333 Wheelie Ct, Windmark Beach, FL 32456',
        numberOfBedrooms: '2',
        numberOfBathrooms: '1',
        hasPorch: true,
        porchHasSwing: true,
        price: '425,000.00'
    },
  ];
  
  module.exports = {
    getAll: function () {
      return houses;
    },
  
    getOne: function (id) {
      return houses.find((house) => house.id === parseInt(id));
    },
  };