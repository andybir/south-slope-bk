import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import globalstylesUrl from '~/styles/global.css'

export const links = () => [{ rel: 'stylesheet', href: globalstylesUrl }]

export const meta = () => {
  const description = 'A website for all things South Slope, Brooklyn'
  const keywords = 'south slope, brooklyn, restaurants, bars'
  const title = 'South Slope BK'
  return { description, keywords, title }
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <script
          src='https://kit.fontawesome.com/25f620e40e.js'
          crossorigin='anonymous'
        ></script>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='logo'>
          South Slope
        </Link>

        {/* <ul className='nav'>
          <li>
            <Link to=''>Menu Item 1</Link>
          </li>
        </ul> */}
      </nav>
      <div className='container'>{children}</div>
    </>
  )
}

export function ErrorBoundary({ error }) {
  console.log(error)
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  )
}
