/** @jsxRuntime classic */

// /** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Product2 from 'assets/prod2.jpg'
import Product1 from 'assets/prod1.jpg'
import Product3 from 'assets/prod3.jpeg'
import Product4 from 'assets/prod4.jpeg'

const packages = {
  monthly: [
    {
      id: 5,
      header: 'Suggested',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Clay Kit',
      description: 'The All in One Kit',
      priceWithUnit: 'Rp. 75.000',
      buttonText: 'Buy Now',
      src: Product1,
      href: 'https://shopee.co.id/Homemade-Clay-Kit-FULLSET-100-Stoneware-Clay-i.478147379.8872866921',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: '350gr Watertight stoneware clay',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "2 pcs Joyko painting brush",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: '6 pot Premium acrilic colour',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: '1 pcs Soft sponge',
          isAvailable: true,
        },
      ],
    },
    {
      id: 1,
      name: 'Clay (Only)',
      href: 'https://shopee.co.id/100-Stoneware-Clay-500gram-(Homemade-Clay-Kit)-i.478147379.8872885525',
      description: 'A 100% Stoneware Clay',
      buttonText: 'Buy Now',
      priceWithUnit: 'Rp 34.000',
      src: Product2,
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: '500 Gr Of Best Quality Clay',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Varnish',
      src: Product3,
      href: 'https://shopee.co.id/Varnish-by-Setangan.id-i.478147379.9480476624',
      description: 'A Varnish To Shimmer Your Craft',
      priceWithUnit: 'Rp 8.000',
      buttonText: 'Buy Now',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Small Pot Varnish With Water Mixture',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      name: 'Paint (Only)',
      href: 'https://shopee.co.id/(-Additional)-Cat-Only-i.478147379.11236356148',
      description: 'An Additional Color Tube',
      priceWithUnit: 'Rp 19.000',
      buttonText: 'Buy Now',
      src: Product4,
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Small Pot Varnish With Water Mixture',
          isAvailable: true,
        },
      ],
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { monthly } = packages;
  const [state] = useState({
    active: 'monthly',
    pricingPlan: monthly
  })

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{ variant: 'section.pricing', mb: -130 }}>
      <Container>
        <SectionHeader
        slogan="Our Products"
        title="Choose What You Needs"
        />
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box sx={styles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
