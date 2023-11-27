import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{translate({ message: siteConfig.tagline, id: 'home.page.tagline' })}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate id='home.page.goto.guide'>Get Started</Translate>
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
      description={translate({ message: siteConfig.tagline, id: "home.page.tagline" })}
    >
      <HomepageHeader />
      <main>
        <div id="content" className='content-home'>
          <h2 id='cfw'><Translate id='home.page.cfw.title'>CFW ?</Translate></h2>
          <p><Translate id='home.page.cfw.text1'>Custom firmwares (CFW) are software modifications for the numworks. They allow you to do anything that the Numworks is physically capable of doing, rather than being limited by whatever Numworks allows you to do.</Translate></p>
          <p><Translate id='home.page.cfw.text2'>Popular uses for CFW include:</Translate></p>
          <ul>
            <li><Translate id='home.page.cfw.possibilities.1'>Running homebrew software and games made for or ported to the Numworks</Translate></li>
            <li><Translate id='home.page.cfw.possibilities.2'>Installing apps like emulators</Translate></li>
            <li><Translate id='home.page.cfw.possibilities.3.part1'>Installing </Translate><a href="https://www-fourier.univ-grenoble-alpes.fr/~parisse/numworks/khicasnw.html">KhiCAS</a><Translate id='home.page.cfw.possibilities.3.part2'>, a very powerful Computer Algebra Software</Translate></li>
            <li><Translate id='home.page.cfw.possibilities.4.part1'>Installing </Translate><a href="/docs/cfw/choose-a-cfw"><Translate id='home.page.cfw.possibilities.4.part2'>others CFW</Translate></a><Translate id='home.page.cfw.possibilities.4.part3'>, like </Translate><a href="/docs/cfw/omega">Omega</a><Translate id='home.page.cfw.possibilities.4.part4'> or </Translate><a href="/docs/cfw/upsilon">Upsilon</a></li>
          </ul>
          <h2 id='what-does-this-guide-contain'><Translate id='home.page.whatContent.title'>What does this guide contain ?</Translate></h2>
          <p><Translate id='home.page.whatContent.text'>This guide will explain how to:</Translate></p>
          <ul>
            <li><Translate id='home.page.whatContent.list.1'>Unlock your calculator if you need to</Translate></li>
            <li><Translate id='home.page.whatContent.list.2'>Install a CFW on your calculator</Translate></li>
            <li><Translate id='home.page.whatContent.list.3'>Install a custom bootloader</Translate></li>
          </ul>
          <h2 id='what-do-i-need-to-know-before-starting'><Translate id='home.page.whatKnow.title'>What do I need to know before starting?</Translate></h2>
          <ul>
            <li><Translate id='home.page.whatKnow.text1'>The techniques described in this guide are pretty much in their infancy. We are not responsible for anything that goes wrong with your device. There is a slight chance that you might brick your device</Translate></li>
            <li><Translate id='home.page.whatKnow.text2'>This guide is compatible with every retail device in the Numworks family of calculators</Translate></li>
          </ul>
          <div className="center">
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              <Translate id='home.page.goto.guide'>Get Started</Translate>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
