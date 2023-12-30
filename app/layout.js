import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';

export const metadata = {
  title: 'Furniro',
  description: 'Discover New Furniture Collections',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
