import "./globals.css";

export const metadata = {
  title: "Auth.js v5",
  description: "Authentication using Auth.js v5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
