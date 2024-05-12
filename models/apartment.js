const apartments = [
    { 
        id: 1, 
        name: 'Mexico Beach Crossings', 
        SqFt: '1500', price: '1998.00', 
        addres: '155 Town Village Blvd, Mexico Beach, FL 32456',
        isPetFriendly: true,
        waterfrontView: false,
        woodedView: true,
        walkToBeach: true,
    },
    { 
        id: 2,
        name: 'The Hawthorne', 
        SqFt: '1500', price: '1999.00', 
        addres: '8150 Point Meadows Dr, Jacksonville, FL 32256',
        isPetFriendly: true,
        waterfrontView: false,
        woodedView: false,
        walkToBeach: false, 
    },
    { 
        id: 3,
        name: 'Barefoot Cottages', 
        SqFt: '2000', price: '2199.00', 
        addres: '555 Hwy 98, Port St Joe, FL 32456',
        isPetFriendly: true,
        waterfrontView: false,
        woodedView: true,
        walkToBeach: true, 
    },
  ];
  
  module.exports = {
    getAll: function () {
      return apartments;
    },
  
    getOne: function (id) {
      return apartments.find((apartment) => apartment.id === parseInt(id));
    },
  };