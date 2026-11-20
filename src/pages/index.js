import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// ----------------------------------------------------------------------
// TUTORIALS
// To open a tutorial card, put its page address in "to".
// A card with to: null shows "Coming soon" and is not a link.
// ----------------------------------------------------------------------
const tutorials = [
  {name: 'HTML', text: 'Web structure', to: '/docs/html/intro'},
  {name: 'CSS', text: 'Design and layout', to: '/docs/css/modern-css'},
  {name: 'JavaScript', text: 'Interactivity', to: null},
  {name: 'Python', text: 'Beginner friendly', to: null},
  {name: 'C and C++', text: 'Core skills', to: null},
  {name: 'Java and Go', text: 'Modern apps', to: null},
];

function TutorialCard({name, text, to}) {
  const content = (
    <>
      <span className={styles.cardName}>{name}</span>
      <span className={styles.cardText}>{text}</span>
      {!to && <span className={styles.soon}>Coming soon</span>}
    </>
  );

  if (to) {
    return (
      <Link className={clsx(styles.card, styles.cardLink)} to={to}>
        {content}
      </Link>
    );
  }
  return <div className={clsx(styles.card, styles.cardSoon)}>{content}</div>;
}

export default function Home() {
  return (
    <Layout
      title="Learn Programming for Free"
      description="CodeNest offers free, easy-to-follow programming tutorials for HTML, CSS, JavaScript, Python, C, C++ and more, with practice questions.">
      <main className={styles.page}>
        <div className="container">
          <Heading as="h1" className={styles.title}>
            Code your future.
          </Heading>
          <p className={styles.subtitle}>
            Free programming tutorials with exercises and quizzes.
          </p>
          <div className={styles.term}>Learn Programming Languages</div>
          <div>
            <Link className={styles.btn} to="/docs/html/intro">
              Start Learning Free
            </Link>
          </div>

          <div className={styles.grid}>
            {tutorials.map((item) => (
              <TutorialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}