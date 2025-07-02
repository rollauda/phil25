import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Leçons',
    Svg: require('@site/static/img/philo.svg').default,
    to: '/docs/L0/accueil',
  },
  {
    title: 'Méthode',
    Svg: require('@site/static/img/method.svg').default,
    to: '/methode/intro',
  },
  {
    title: 'Manuel',
    Svg: require('@site/static/img/manuel.svg').default,
    to: '/manuel/intro',
  },
];

function Feature({Svg, title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        {/* Titre cliquable */}
        <Link to={to}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
