import greekSalad from '../../../../assets/greek-salad.jpg';
import bruschetta from '../../../../assets/bruchetta.svg';
import lemonDessert from '../../../../assets/lemon-dessert.jpg';

const mock = [
    {
        src: greekSalad,
        title: 'Greek salad',
        price: '$12.99',
        description: 'The famous greek salad of chispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        footer: 'Order a delivery',
    },
    {
        src: bruschetta,
        title: 'Bruchetta',
        price: '$5.99',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        footer: 'Order a delivery',
    },
    {
        src: lemonDessert,
        title: 'Lemon dessert',
        price: '$5.00',
        description: "This comes atraight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        footer: 'Order a delivery',
    }

];

export default mock;