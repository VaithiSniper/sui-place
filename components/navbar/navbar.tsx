'use client'

import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './styles.css';
import { ConnectButton, useCurrentWallet } from '@mysten/dapp-kit';
import Link from 'next/link';
import Image from 'next/image';

const NavigationMenuDemo = (props: { isPlace: Boolean }) => {

  const isPlace: Boolean = props.isPlace

  if (isPlace) {
    const accounts = useCurrentWallet();
    if (accounts == null) {
      console.log("You are not connected!")
    }
    else {
      console.log(accounts)
    }
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
                  <Image height={40} width={40} src="/images/bridge/logo.png" alt="Wormhole Logo"></Image>
                    <div className="CalloutHeading">The Bible</div>
                    <p className="CalloutText">Learn and Earn on the go.</p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <ListItem title="Rules" content="Veni. Vidi. Vici." mainlink="learn" sublink="rules" />
              <ListItem title="Actors" content="Would buy or sell?" mainlink="learn" sublink="actors"/>
              <ListItem title="Inception" content="Why did we build it?" mainlink="learn" sublink="inception"/>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='p-2 text-blue'>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Bridge <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
          <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/bridge/wormhole">
                    <Image height={40} width={40} src="/images/bridge/wormhole.png" alt="Wormhole Logo"></Image>
                    <div className="CalloutHeading">Wormhole</div>
                    <p className="CalloutText">Cross-chain portal to transfer assets</p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/bridge/router">
                    <Image height={40} width={40} src="/images/bridge/router.jpeg" alt="Wormhole Logo" className='gap-y-0 space-y-0 top-0 py-0'>
                    </Image>
                    <div className="CalloutHeading">Router</div>
                    <p className="CalloutText">Cheap and fast EVM bridges</p>
                  </a>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {
          isPlace ? (
            <NavigationMenu.Item className='p-1'>
              <ConnectButton style={{ color: "#4CA2FF" }} />
            </NavigationMenu.Item>
          )
            :
            (
              null
            )
        }
        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root >
  );
};

const ListItem = (props: any) => (
  <li>
    <Link href={`/${props.mainlink}/${props.sublink}`}>
    <div>
      <div className='text-xl font-bold font-heading my-0.5'>{props.title}</div>
      <div className='text-sm font-light font-sub tracking-light'>{props.content}</div>
    </div>
    </Link>
    
  </li>
)

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
