import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "RoPhim - Xem Phim Hay Nhất Miễn Phí",
  description: "Xem Phim Hay Nhất Miễn Phí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
