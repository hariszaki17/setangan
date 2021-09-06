/** @jsxRuntime classic */

// /** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Cardboard from 'assets/cardboard.jpg';
import Baggase from 'assets/baggase.jpg';
import Color from 'assets/color.jpg';
import QC from 'assets/qc.jpg';

const data = [
  {
    id: 1,
    imgSrc: Cardboard,
    altText: 'Cardboard Package',
    title: 'Cardboard Package',
    text:
      'We Update The Size of Cardboard Layer To Smaller Package Form And Make It Safer For Delivery.',
  },
  {
    id: 2,
    imgSrc: Baggase,
    altText: 'Baggase Box',
    title: 'Baggase Box',
    text:
      "We'd Belive The Creativity Will Never Harm Anything, Is Specific Our Evironment. Thus, To Align With Our Value We Changed Our Packages To Be More Natural And Environment Friendly.",
  },
  {
    id: 3,
    imgSrc: Color,
    altText: 'Make Yours More Colorful',
    title: 'Make Yours More Colorful',
    text:
      "With More Colors We Provided You Can Create An Existential. Just Rainbows Your Craft!",
  },
  {
    id: 4,
    imgSrc: QC,
    altText: 'Quality Check',
    title: 'Quality Check',
    text:
      'All Our Products Has Been Passed Quality Check Before Landed Right To Your Home. We Calculate More Percise Weight, Ensure No Broken Part, Cross Checking Order, etc.',
  },
];

export default function Feature() {
  return (
   <section sx={{ variant: "section.feature" }}>
     <Container>
        <SectionHeader
        slogan="Our Latest"
        title="Newest Product Improvement"
        ></SectionHeader>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard 
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
