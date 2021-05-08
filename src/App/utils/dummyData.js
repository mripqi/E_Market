// 1 Store will have many product
// Store will have id, picture, name, description, address, owner,  rating, distance, state.
// Product will have id, name, picture, state of store and name of store

import Constants from './constant';

export const store = [
  {
    id: 1,
    name: 'Warung Eka',
    image: Constants.STORE_IMAGE._1,
    description: 'TESTING 1st waarung',
    address: 'JL MEDAN JAYA',
    owner: 'EKA',
    rating: 4,
    distance: '2 Km',
    state: true,
    Product: [
      {
        id: 'A',
        name: 'Telur',
        image: Constants.PRODUCT_IMAGE.egg1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        harga: 1300,
        rating: 5,
      },
    ],
  },
  {
    id: 2,
    name: 'Warung budi',
    image: Constants.STORE_IMAGE._2,
    description: 'TESTING 2nd waarung',
    address: 'JL JAYA JAYA',
    owner: 'Budi',
    rating: 4,
    distance: '3 Km',
    state: false,
    Product: [
      {
        id: 'B',
        name: 'Telur',
        image: Constants.PRODUCT_IMAGE.egg2,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        harga: 1300,
        rating: 5,
      },
    ],
  },
  {
    id: 3,
    name: 'Warung Airi',
    image: Constants.STORE_IMAGE._2,
    description: 'TESTING 3rd waarung',
    address: 'JL KARTA JAYA',
    owner: 'Airi',
    rating: 4,
    distance: '4 Km',
    state: false,
    Product: [
      {
        id: 'C',
        name: 'Telur',
        image: Constants.PRODUCT_IMAGE.egg3,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        harga: 1300,
        rating: 5,
      },
    ],
  },
  {
    id: 4,
    name: 'Warung Jukir',
    image: Constants.STORE_IMAGE._1,
    description: 'TESTING 4th waarung',
    address: 'JL ASAP',
    owner: 'Jukir',
    rating: 4,
    distance: '5 Km',
    state: true,
    Product: [
      {
        id: 'D',
        name: 'Telur',
        image: Constants.PRODUCT_IMAGE.egg4,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        harga: 1300,
        rating: 5,
      },
    ],
  },
  {
    id: 5,
    name: 'Warung Monhun',
    image: Constants.STORE_IMAGE._1,
    description: 'TESTING 5th waarung',
    address: 'JL ASAP',
    owner: 'monhun',
    rating: 4,
    distance: '5 Km',
    state: true,
    Product: [
      {
        id: 'E',
        name: 'Telur',
        image: Constants.PRODUCT_IMAGE.egg5,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        harga: 1300,
        rating: 5,
      },
    ],
  },
  {
    id: 6,
    name: 'Warung Sai',
    image: Constants.STORE_IMAGE._1,
    description: 'TESTING 6th waarung',
    address: 'JL Pyongir',
    owner: 'Sai',
    rating: 4,
    distance: '6 Km',
    state: true,
    Product: [
      {
        id: 'F',
        name: 'Telur',
        image: Constants.PRODUCT_IMAGE.egg6,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        harga: 1300,
        rating: 5,
      },
    ],
  },
];
