import Head from 'next/head';
import AppLayout from './components/AppLayout';
import { fonts } from '../styles/theme';
import { colors } from '../styles/theme';
import Button from './components/Button';
import GitHub from './components/Icons/GitHub';

export default function Home() {
  return (
    <>
      <AppLayout>
        {' '}
        {/* Es la plantilla de cosas comunes para todas las vistas */}
        <Head>
          <title>boarDev</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section>
          <img src="/logo.svg" />
          <h1>boarDev!</h1>
          <Button>
            <GitHub fill="#fff" width={18} height={18} />
            Login GitHub
          </Button>
        </section>
      </AppLayout>

      {/* Estilos dentro del propio componente con JSX */}
      <style jsx>{`
        img {
          width: 120px;
        }
        h1 {
          color: ${colors.primary};
          font-family: ${fonts.base};
          font-size: 50px;
          font-weight: 700;
        }

        section {
          display: grid;
          place-content: center;
          place-items: center;
          height: 100%;
        }
      `}</style>
      <style global jsx>{``}</style>
    </>
  );
}
