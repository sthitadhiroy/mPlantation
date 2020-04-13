const categories = [
  {
    id: 'plants',
    name: 'Plants',
    tags: ['products'],
    count: 20,
    image: require('../assets/icons/plants.png'),
  },
  {
    id: 'knowp',
    name: 'Plants Trivia',
    tags: ['trivia'],
    count: 20,
    image: require('../assets/icons/plants.png'),
  },
  {
    id: 'seeds',
    name: 'Seeds',
    tags: ['products'],
    count: 16,
    image: require('../assets/icons/seeds.png'),
  },
  {
    id: 'knows',
    name: 'Seeds Trivia',
    tags: ['trivia'],
    count: 6,
    image: require('../assets/icons/seeds.png'),
  },
  {
    id: 'flowers',
    name: 'Flowers',
    tags: ['products'],
    count: 68,
    image: require('../assets/icons/flowers.png'),
  },
  {
    id: 'knowf',
    name: 'Flowers Trivia',
    tags: ['trivia'],
    count: 6,
    image: require('../assets/icons/flowers.png'),
  },
  {
    id: 'sprayers',
    name: 'Sprayers',
    tags: ['products'],
    count: 17,
    image: require('../assets/icons/sprayers.png'),
  },
  {
    id: 'pots',
    name: 'Pots',
    tags: ['products'],
    count: 47,
    image: require('../assets/icons/pots.png'),
  },
  {
    id: 'fertilizers',
    name: 'fertilizers',
    tags: ['products'],
    count: 47,
    image: require('../assets/icons/fertilizers.png'),
  },
  {
    id: 'knowf',
    name: 'Fertilizers Trivia',
    tags: ['trivia'],
    count: 4,
    image: require('../assets/icons/fertilizers.png'),
  },
  {
    id: 'home',
    name: 'Home',
    tags: ['decor'],
    count: 4,
    image: require('../assets/icons/plants.png'),
  },
  {
    id: 'office',
    name: 'Office',
    tags: ['decor'],
    count: 4,
    image: require('../assets/icons/plants.png'),
  },
];

const products = [
  {
    id: 1,
    name: '16 Best Plants That Thrive In Your Bedroom',
    description:
      'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
    tags: ['Interior', '27 m²', 'Ideas'],
    images: [
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      // showing only 3 images, show +6 for the rest
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
    ],
  },
];

const explore = [
  // images
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  require('../assets/images/explore_4.png'),
  require('../assets/images/explore_5.png'),
  require('../assets/images/explore_6.png'),
];

const profile = {
  username: 'react-ui-kit',
  location: 'Europe',
  email: 'contact@react-ui-kit.com',
  avatar: require('../assets/images/avatar.png'),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
};

export {categories, explore, products, profile};
