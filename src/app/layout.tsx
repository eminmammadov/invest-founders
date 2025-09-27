import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/fonts/gellix.css";
import { generateMetadata, pageMetadata } from "@/shared/metadata";
import { Header, Footer } from "@/components/layout";
import { JupiterWalletProvider } from "@/components/core/JupiterWalletProvider";

// Generate metadata using the new modular system
export const metadata: Metadata = generateMetadata(pageMetadata.home);

// Viewport configuration (Next.js 15 requirement)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f0f0f'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-gellix"
        data-new-gr-c-s-check-loaded="14.1255.0"
        data-gr-ext-installed=""
      >
        <JupiterWalletProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </JupiterWalletProvider>
      </body>
    </html>
  );
}
