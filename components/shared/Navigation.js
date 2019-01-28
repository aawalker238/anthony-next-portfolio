import Link from 'next/link';
import '../../styles/main.scss';

export default () => {
  return (
    <nav>
      <h1 className="custom">hello css</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/resume">
        <a>Resume</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>

      <style jsx>
        {`
          a {
            font-size: 20px;
          }
        `}
      </style>
    </nav>
  );
};
