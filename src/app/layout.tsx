import Nav from '@/components/Nav';
import Provider from '@/components/Provider';
import './globals.css';

export const metadata = {
  title: 'Chat Gpt Prompts',
  description: 'Discover and Share Useful Chat Gpt Prompts !',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
