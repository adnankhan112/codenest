import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// ----------------------------------------------------------------------
// TUTORIALS
// To open a tutorial card, put its page address in "to".
// A card with to: null shows "Coming soon" and is not a link.
// ----------------------------------------------------------------------
const tutorials = [
  {
    name: 'HTML',
    badge: 'HTML',
    description: 'Build the structure of every web page.',
    to: '/docs/html/intro',
  },
  {
    name: 'CSS',
    badge: 'CSS',
    description: 'Style your pages with color, layout, and animation.',
    to: '/docs/css/modern-css',
  },
  {
    name: 'JavaScript',
    badge: 'JS',
    description: 'Make your web pages interactive.',
    to: null,
  },
  {
    name: 'Python',
    badge: 'PY',
    description: 'Learn a simple and powerful language for beginners.',
    to: null,
  },
  {
    name: 'C',
    badge: 'C',
    description: 'Understand how programming works close to the machine.',
    to: null,
  },
  {
    name: 'C++',
    badge: 'C++',
    description: 'Learn fast, powerful programming with objects.',
    to: null,
  },
  {
    name: 'Java',
    badge: 'JAVA',
    description: 'Build programs that run almost anywhere.',
    to: null,
  },
  {
    name: 'Go',
    badge: 'GO',
    description: 'Write simple, fast programs with a modern language.',
    to: null,
  },
];

const reasons = [
  {
    title: 'Simple English',
    text: 'Every lesson uses short sentences and clear words, so beginners can follow easily.',
  },
  {
    title: 'Theory first, then practice',
    text: 'Learn the idea, see an example, and then try it yourself.',
  },
  {
    title: 'Exercises and quizzes',
    text: 'Test what you learned with practice tasks and quizzes.',
  },
  {
    title: 'Free for everyone',
    text: 'No payment needed. Open a page and start learning.',
  },
];

const steps = [
  {
    title: 'Pick a tutorial',
    text: 'Choose a language you want to learn.',
  },
  {
    title: 'Read and try',
    text: 'Read the theory and try the examples on your own computer.',
  },
  {
    title: 'Practice and test',
    text: 'Finish the exercises and take the quiz to check your progress.',
  },
];

function TutorialCard({name, badge, description, to}) {
  const content = (
    <>
      <span className={styles.badge} aria-hidden="true">
        {badge}
      </span>
      <Heading as="h3" className={styles.cardTitle}>
        {name}
      </Heading>
      <p className={styles.cardText}>{description}</p>
      <span className={styles.cardAction}>
        {to ? 'Start learning →' : 'Coming soon'}
      </span>
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

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link className={styles.btnPrimary} to="/docs/html/intro">
            Start Learning Free
          </Link>
          <Link className={styles.btnSecondary} to="#tutorials">
            Explore Tutorials
          </Link>
        </div>
        <p className={styles.heroNote}>
          Free • Beginner friendly • Exercises and quizzes
        </p>
      </div>
    </header>
  );
}

function Tutorials() {
  return (
    <section className={styles.section} id="tutorials">
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Choose a tutorial
        </Heading>
        <p className={styles.sectionIntro}>
          Pick a language and start learning step by step. New tutorials are
          added all the time.
        </p>
        <div className={styles.cardGrid}>
          {tutorials.map((item) => (
            <TutorialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCodeNest() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Why learn with CodeNest?
        </Heading>
        <p className={styles.sectionIntro}>
          We keep learning simple, clear, and practical.
        </p>
        <div className={styles.reasonGrid}>
          {reasons.map((item) => (
            <div key={item.title} className={styles.reason}>
              <Heading as="h3" className={styles.reasonTitle}>
                {item.title}
              </Heading>
              <p className={styles.reasonText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          How it works
        </Heading>
        <p className={styles.sectionIntro}>Three simple steps to start.</p>
        <div className={styles.steps}>
          {steps.map((item, index) => (
            <div key={item.title} className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                {index + 1}
              </span>
              <Heading as="h3" className={styles.stepTitle}>
                {item.title}
              </Heading>
              <p className={styles.stepText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          Ready to start learning?
        </Heading>
        <p className={styles.ctaText}>
          Open your first lesson now. It is free and it only takes a few minutes.
        </p>
        <Link className={styles.btnPrimary} to="/docs/html/intro">
          Start Learning Free
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Learn Programming for Free"
      description="CodeNest offers free, easy-to-follow programming tutorials for HTML, CSS, JavaScript, Python, C, C++ and more, with practice questions.">
      <Hero />
      <main>
        <Tutorials />
        <WhyCodeNest />
        <HowItWorks />
        <CallToAction />
      </main>
    </Layout>
  );
}