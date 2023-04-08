import "./globals.css";

export const metadata = {
  title: "Yamani. Yuda",
  description: "My portofolio 2023",
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
