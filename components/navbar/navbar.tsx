'use client'

import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './styles.css';
import { ConnectButton, useCurrentWallet } from '@mysten/dapp-kit';

const NavigationMenuDemo = () => {

  const accounts = useCurrentWallet();
  if (accounts == null) {
    console.log("You are not connected!")
  }
  else {
    console.log(accounts)
  }

  return (
    <NavigationMenu.Root className="NavigationMenuRoot top-2 text-blue">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item className='p-2 text-blue'>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Learn <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">Radix Primitives</div>
                    <p className="CalloutText">Unstyled, accessible components for React.</p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <li>Dummy</li>
              Build high-quality, accessible design systems and web apps.
              <li>Dummy</li>
              Build high-quality, accessible design systems and web apps.
              <li>Dummy</li>
              Build high-quality, accessible design systems and web apps.
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='p-2 text-blue'>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Overview <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              <li>Dummy</li>
              Build high-quality, accessible design systems and web apps.
              <li>Dummy</li>
              Build high-quality, accessible design systems and web apps.
              <li>Dummy</li>
              Build high-quality, accessible design systems and web apps.
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='p-1'>
          <ConnectButton style={{ color: "#4CA2FF" }} />
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

// const ListItem = React.forwardRef((ListItemObj, forwardedRef) => (
//   <li>
//     <NavigationMenu.Link asChild>
//       <a className={classNames('ListItemLink', ListItemObj.className)} {...ListItemObj.props} ref={forwardedRef}>
//         <div className="ListItemHeading">{ListItemObj.title}</div>
//         <p className="ListItemText">{ListItemObj.children}</p>
//       </a>
//     </NavigationMenu.Link>
//   </li>
// ));

export default NavigationMenuDemo;
