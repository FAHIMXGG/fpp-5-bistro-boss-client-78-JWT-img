import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../../src/assets/menu/banner3.jpg'
import soupImg from '../../../src/assets/menu/soup-bg.jpg'
import saladImg from '../../../src/assets/menu/salad-bg.jpg'
import pizzaImg from '../../../src/assets/menu/pizza-bg.jpg'
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';
import useMenu from '../../hooks/UseMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>EZ | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory 
            items={desserts}
            title="dessert"
            coverImg ={dessertImg}
            ></MenuCategory>
            <MenuCategory 
            items={pizza}
            title="pizza"
            coverImg ={pizzaImg}
            ></MenuCategory>
            <MenuCategory 
            items={salad}
            title="salad"
            coverImg ={saladImg}
            ></MenuCategory>
            <MenuCategory 
            items={soup}
            title="soup"
            coverImg ={soupImg}
            ></MenuCategory>
                
            
        </div>
    );
};

export default Menu;