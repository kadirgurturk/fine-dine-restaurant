//Menu
import salmonDesk from '../assets/homepage/salmon-desktop-tablet.jpg'
import salmonMob from '../assets/homepage/salmon-mobile.jpg';

import beefDesk from '../assets/homepage/beef-desktop-tablet.jpg'
import beefMob from '../assets/homepage/beef-mobile.jpg';

import chocolateDesk from '../assets/homepage/chocolate-desktop-tablet.jpg'
import chocolateMob from '../assets/homepage/chocolate-mobile.jpg';

//Events
import familyDesk from '../assets/homepage/family-gathering-desktop.jpg'
import familyTab from '../assets/homepage/family-gathering-tablet.jpg';
import familyMob from '../assets/homepage/family-gathering-mobile.jpg';

import specialDesk from '../assets/homepage/special-events-desktop.jpg'
import specialTab from '../assets/homepage/special-events-tablet.jpg';
import specialMob from '../assets/homepage/special-events-mobile.jpg';

import socialDesk from '../assets/homepage/social-events-desktop.jpg'
import socialTab from '../assets/homepage/social-events-tablet.jpg';
import socialMob from '../assets/homepage/social-events-mobile.jpg';

export const eventItems = [
    {
      id: 1,
      title: 'family gathering',
      description: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
      images: {
        desk: familyDesk,
        tablet: familyTab,
        mobile: familyMob
      },
    },
    {
      id: 2,
      title: 'special events',
      description: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
      images: {
        desk: specialDesk,
        tablet: specialTab,
        mobile: specialMob
      },
    },
    {
     id: 3,
      title: 'social events',
      description: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
      images: {
        desk: socialDesk,
        tablet: socialTab,
        mobile: socialMob
      },
    },
  ];
  
  export const menuItems = [
    {
      id: 1,
      title: 'seared salmon fillet',
      description: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
      images: {
        desk: salmonDesk,
        mobile: salmonMob
      },
    },
    {
      id: 2,
      title: 'rosemary filet mignon',
      description: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
      images: {
        desk: beefDesk,
        mobile: beefMob
      },
    },
    {
     id: 3,
      title: 'summer fruit chocolate mousse',
      description: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
      images: {
        desk: chocolateDesk,
        mobile: chocolateMob
      },
    },
  ];