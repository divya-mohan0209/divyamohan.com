import React from 'react';
import clsx from 'clsx';
import { Link } from '../link'
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Me',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Hello 👋

        My name is Divya Mohan. I'm an open source professional & engineer by trade
        and am heavily invested in making technology & technical communities more
        accessible & inclusive. I'm currently a Senior Technical Evangelist at <Link to="https://suse.com">SUSE</Link>
        focused on developer relations and community building for its cloud native
        projects.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3 align="center">{title}</h3>
        <p align="center">{description}</p>
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