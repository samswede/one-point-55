import { ProductItem } from '../types/global'

const INITIAL_STATE : ProductItem[] = [
    {
        id: '1',
        title: 'Black Seude',
        description: 'Product description goes here',
        imageUrl: '/assets/images/shop/1.jpg',
        price: 399
    },
    {
        id: '2',
        title: 'Mule',
        description: 'Product description goes here',
          imageUrl: '/assets/images/shop/4.jpg',
        price: 499
    },
    {
        id: '3',
        title: 'Chelsea',
        description: 'Product description goes here',
        imageUrl: '/assets/images/shop/8.jpg',
        price: 799
    },
    {
        id: '4',
        title: 'Desert Flats',
        description: 'Product description goes here',
        imageUrl: '/assets/images/shop/2.jpg',
        price: 398
    },
    {
        id: '5',
        title: 'Angel',
        description: 'Product description goes here',
        imageUrl: '/assets/images/shop/5.jpg',
        price: 999
    },
    {
        id: '6',
        title: 'Desert',
        description: 'Product description goes here',
        imageUrl: '/assets/images/shop/7.jpg',
        price: 999
    },
]

export { INITIAL_STATE }