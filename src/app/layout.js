"use client"
import { ApolloProvider } from '@apollo/client';
import client from './lib/apollo-client';
import GlobalStyles from './styles/GlobalStyles';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          <GlobalStyles />
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}