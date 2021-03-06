/** @jsxRuntime classic */

// /** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} altText={altText} sx={styles.img} />
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1,
  },

  img: {
    width: ['100px', null, null, '180px', '200px'],
    height: 'auto',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
    borderRadius: '50%'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [2, 3],
      color: 'primary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px'],
    },

    subTitle: {
      fontSize: [3],
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
