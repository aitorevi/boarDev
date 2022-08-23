// Este archivo va a ser nuestra plantilla para todas las paginas de nuestra SPA, tiene elementos comunes y estilos globales
import styles, { globalStyles } from './styles';

export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <style jsx>{styles}</style>
      <style global jsx>
        {globalStyles}
      </style>
    </>
  );
}
