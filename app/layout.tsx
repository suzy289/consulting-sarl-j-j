import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jjconsulting.cm"),
  title: "J & J Consulting SARL | Cabinet d'Audit, Comptabilité & Conseil Fiscal — Yaoundé",
  description:
    "J & J Consulting SARL est votre cabinet d'audit, comptabilité, conseil fiscal et finance à Yaoundé, Cameroun. Fondé par Darlain Dongmo. Devis gratuit. 10+ ans d'expérience.",
  keywords: "cabinet comptable Yaoundé, audit Cameroun, conseil fiscal, J&J Consulting",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "J & J Consulting SARL | Audit & Conseil Fiscal Yaoundé",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document;var r=function(){try{d.querySelectorAll('[data-cursor-element-id]').forEach(function(e){e.removeAttribute('data-cursor-element-id')})}catch(e){}};r();if(d.readyState==='loading'){d.addEventListener('DOMContentLoaded',r);d.addEventListener('readystatechange',function(){if(d.readyState!=='loading')r()})}setTimeout(r,0);requestAnimationFrame(r)})();`,
          }}
        />
        <Navbar />
        <main>
          <div id="app-content" suppressHydrationWarning>
            {children}
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
