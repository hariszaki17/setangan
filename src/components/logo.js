/** @jsxRuntime classic */

// /** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
    path="/"
    sx={{
      variant: "links.logo",
      display: 'flex center',
      cursor: 'pointer',
      mr: 15,
      width: '5%',
    }}
    { ...rest }
    >
      <Image src={src} sx={{ borderRadius: '50%' }} alt="nextjs landing page logo"/>
    </Link>
  );
}
