/** @jsxRuntime classic */

// /** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Percent from 'assets/original.png';
import Easy from 'assets/easy.png';
import Kit from 'assets/tools.png';
import PriceTag from 'assets/money.png';

const data = [
  {
    id: 1,
    imgSrc: Percent,
    altText: '100% Stoneware Clay',
    title: '100% Stoneware Clay',
    text:
      'Our product made by a pure stoneware clay provides more durable material.',
  },
  {
    id: 2,
    imgSrc: Easy,
    altText: 'Simple and Easy to Use',
    title: 'Simple and Easy to Use',
    text:
      "Since setangan is a ready to use clay, you won't needed any tools to create your own clay craft.",
  },
  {
    id: 3,
    imgSrc: Kit,
    altText: 'Complete Clay Kit',
    title: 'Complete Clay Kit',
    text:
      'Coloring, Varnishing, Sanding and Clay Crafting Can be Done With Only a Package of Setangan.',
  },
  {
    id: 4,
    imgSrc: PriceTag,
    altText: 'High Quality with Low Spend Money',
    title: 'High Quality with Low Spend Money',
    text:
      'Setangan Gives You The Best Deal For All in One Clay Kit in The Town.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature' }} id="feature">
     <Container>
       <SectionHeader
       slogan="About"
       title="Setangan: The Creative Clay Kit"
       />

       <Grid sx={styles.grid}>
         {data.map((item, i) => (
           <FeatureCardColumn
           key={item.id}
           src={item.imgSrc}
           alt={item.altText}
           title={item.title}
           text={item.text}
           />
         ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
