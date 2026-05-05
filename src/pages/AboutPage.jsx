import About from '../components/About.jsx';
import PageNav from '../components/PageNav.jsx';

export default function AboutPage() {
  return (
    <>
      <About />
      <PageNav current="/about" />
    </>
  );
}
