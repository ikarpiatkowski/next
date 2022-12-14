import Header from "./Header";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>NextJS 13 Ikar</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
