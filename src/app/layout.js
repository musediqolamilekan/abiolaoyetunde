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
        <main className="min-h-screen">{children}</main>
          <Footer />
        <SocialLeft />
        <SocialRight />
      </body>
    </html>
  );
}