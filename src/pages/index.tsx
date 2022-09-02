import Head from 'next/head';

import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';
import Masthead from '@/components/Masthead';
import MHeader from '@/components/MHeader/MHeader';
import Seo from '@/components/Seo';
import Skills from '@/components/Skills';
import Works from '@/components/Works';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <MHeader></MHeader>
      <Head>
        <title>Expansion</title>
        <meta name="description" content="Creating apps for your future"></meta>
        <link rel="icon" href="/facicon.ico"/>
      </Head>
      <Masthead/>
      <AboutUs/>
      <Skills/>
      <Works/>
      <ContactForm/>
    </div>
  );
}
