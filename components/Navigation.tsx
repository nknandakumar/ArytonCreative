"use client";

import { StaggeredMenu } from "./StaggeredMenu";

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Work', ariaLabel: 'View our portfolio', link: '/work' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Instagram', link: '#' },
  { label: 'Behance', link: '#' },
  { label: 'LinkedIn', link: '#' }
];

export default function Navigation() {
  return (
    <>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#08090d" // Button text color when closed (since it's a teal button in our design)
        openMenuButtonColor="#08090d" 
        changeMenuColorOnOpen={false}
        colors={['#CC2200', '#00D4A8']} // the prelayers that slide out
        logoUrl="/logo.jpeg"
        accentColor="#00D4A8" // Teal accents
        isFixed={true}
      />
    </>
  );
}
