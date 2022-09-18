import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';

import DarkBalloonSvg from './../../../static/img/dark_balloon_celebrate.svg';
import LightBalloonSvg from './../../../static/img/light_balloon_celebrate.svg';
import DarkComputerSvg from './../../../static/img/dark_computer_projects.svg';
import LightComputerSvg from './../../../static/img/light_computer_projects.svg';
import DarkSpaceSvg from './../../../static/img/dark_space_explore.svg';
import LightSpaceSvg from './../../../static/img/light_space_explore.svg';
import DarkWomanSvg from './../../../static/img/dark_woman_talks.svg';
import LightWomanSvg from './../../../static/img/light_woman_talks.svg';



const FeatureList = [
  {
    title: 'Explore',
    Svg: LightSpaceSvg,
    description: (
      <>
        Adventures in continuous learning, advanced research.
      </>
    ),
  },
  {
    title: 'Build',
    Svg: DarkComputerSvg,
    description: (
      <>
        Adventures in development, engineering and community.
      </>
    ),
  },
  {
    title: 'Share',
    Svg: LightWomanSvg,
    description: (
      <>
        Adventures in teaching, speaking, dev advocacy.
      </>
    ),
  },
  {
    title: 'Celebrate',
    Svg: DarkBalloonSvg,
    description: (
      <>
        Adventures in visual storytelling and parenting 
      </>
    ),
  },
];

function Feature({Svg, title, description, light, dark}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
