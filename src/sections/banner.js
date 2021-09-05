/** @jsxRuntime classic */

// /** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-thumb-new.png';
import ShapeLeft from 'assets/shp2.svg';
import ShapeRight from 'assets/shp.svg';
import Logo from 'components/logo';
import LogoSetangan from 'assets/LogoSetangan.jpg'

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
        <Logo src={LogoSetangan} />
          <Heading as="h1" variant="heroPrimary">
            The #1st Creative Clay Kit
          </Heading>
          <Text as="p" variant="heroSecondary">
            A kit that contains you all the things you need to make a clay craft from home!
            Go check our latest!
          </Text>
          <Button variant="primary">Explore</Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} sx={{ borderRadius:'10px' }} alt="banner"/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    // pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pt: '100px',
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1 ,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '40%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '50%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
