/** @jsxRuntime classic */

// /** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';

import IG from 'assets/ig.jpg';
import shapePattern from 'assets/bg-svg.svg';

const data = {
  subTitle: 'Our Socials',
  title: 'Get To Know Us More On Our Social Media',
  description:
    "We Publish Various Post In Regard With Our Newest Product, Tips n Tricks, Special Promos And Many More. So Don't Miss It.",
  btnName: 'Get Started',
  btnURL: 'https://www.instagram.com/setangan.id/',
};

export default function CoreFeature() {
  return (
   <section sx={{variant: 'section.coreFeature'}}>
    <Container sx={styles.containerBox}>
      <Box sx={styles.contentBox}>
        <TextFeature 
          subTitle={data.subTitle}
          title={data.title}
          description={data.description}
          btnName={data.btnName}
          btnURL={data.btnURL}
        />
      </Box>
      <Box sx={styles.thumbnail}>
        <Image src={IG} alt="Thumbnail" sx={{ borderRadius: '2%' }} />
        <Box sx={styles.shapeBox}>
          <Image src={shapePattern} alt="Shape" sx={{ mb: -50 }}/>
        </Box>
      </Box>
    </Container>
   </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
