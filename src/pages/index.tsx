import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div id="content" className='content-home'>
          <h2 id='cfw'>CFW ?</h2>
          <p>Custom firmwares (CFW) are software modifications for the numworks. They allow you to do anything that the Numworks is physically capable of doing, rather than being limited by whatever Numworks allows you to do.</p>
          <p>Popular uses for CFW include:</p>
          <ul>
            <li>Running homebrew software and games made for or ported to the Numworks</li>
            <li>Installing apps like emulators</li>
            <li>Installing <a href="https://www-fourier.univ-grenoble-alpes.fr/~parisse/numworks/khicasnw.html">KhiCAS</a>, a verry powerfull Computer Algebra Software</li>
            <li>Installing <a href="/docs/cfw/choose-a-cfw">others CFW</a>, like <a href="/docs/cfw/omega">Omega</a> or <a href="/docs/cfw/upsilon">Upsilon</a></li>
          </ul>
          <h2 id='what-does-this-guide-contain'>What does this guide contain ?</h2>
          <p>This guide will explain how to:</p>
          <ul>
            <li>Unlock your calculator if you need to</li>
            <li>Install a CFW on your calculator</li>
            <li>Install a custom bootloader</li>
          </ul>
          <h2 id='what-do-i-need-to-know-before-starting'>What do I need to know before starting?</h2>
          <ul>
            <li>The techniques described in this guide are pretty much in their infancy. <a>We are not responsible for anything that goes wrong with your device.</a> There is a slight chance that you might brick your device</li>
            <li>This guide is compatible with every retail device in the Numworks family of calculators</li>
          </ul>
          <div className="center">
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
