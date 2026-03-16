import "@/assets/styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://link-nest-mu.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
