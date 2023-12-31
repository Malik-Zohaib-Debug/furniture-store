
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Furniro',
  description: 'Discover New Furniture Collections',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
            {children}
          {/* <Footer /> */}
        </ChakraProvider>
      </body>
    </html>
  )
}
