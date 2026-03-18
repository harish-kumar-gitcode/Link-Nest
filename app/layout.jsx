import "@/assets/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  metadataBase: new URL("https://link-nest-mu.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-V3MH6PDSX2" />
    </html>
  );
}
