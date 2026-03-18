import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* Replace 'G-XXXXXXXXXX' with your actual Measurement ID */}
      <GoogleAnalytics gaId="G-HDHS0RKC2J" />
    </html>
  );
}
