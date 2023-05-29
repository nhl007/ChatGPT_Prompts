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
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
