import "./globals.css";

export const metadata = {
  title: "Yamani. Yuda",
  description: "My portofolio 2023",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: '/favicon.ico',
    other: {
      rel: '/favicon.ico',
      url: '/favicon.ico',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
