
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function EmailSent() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <h1 className='mt-8 text-4xl md:text-6xl'>Thank you for contacting us, We will get back to you as soon as possible.</h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Return to Website
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}