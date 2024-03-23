import { ProductItem } from '../types/global'

const INITIAL_STATE : ProductItem[] = [
    {
        id: '1',
        title: 'Black Seude',
        description: 'Welcome to the dark side',
        imageUrl: '/assets/images/shop/1.jpg',
        price: 399
    },
    {
        id: '2',
        title: 'Mule',
        description: 'Back to the future',
          imageUrl: '/assets/images/shop/4.jpg',
        price: 499
    },
    {
        id: '3',
        title: 'Chelsea',
        description: 'God bless Carl Marx',
        imageUrl: '/assets/images/shop/8.jpg',
        price: 799
    },
    {
        id: '4',
        title: 'Desert Flats',
        description: 'Go & kill snakes',
        imageUrl: '/assets/images/shop/2.jpg',
        price: 398
    },
    {
        id: '5',
        title: 'Angel',
        description: 'Hitler did nothing wrong',
        imageUrl: '/assets/images/shop/5.jpg',
        price: 999
    },
    {
        id: '6',
        title: 'Desert',
        description: 'Git Gud',
        imageUrl: '/assets/images/shop/7.jpg',
        price: 999
    },
]

export { INITIAL_STATE }