import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import SocialLeft from "@/components/SocialLeft";
import SocialRight from "@/components/SocialRight";


export const metadata = {
  title: 'Abiol Oyetunde — Writer & Storyteller',
  description: 'Personal portfolio and blog by Abiol Oyetunde — travel, lifestyle, bedtime stories, and essays.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative">
          <Header />
          <main className="min-h-screen py-8 pb-20 sm:p-20">{children}</main>
          <Footer />
        </div>
        <SocialLeft />
        <SocialRight />
      </body>
    </html>
  );
}