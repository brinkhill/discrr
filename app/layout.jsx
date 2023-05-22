import Provider from "./components/auth-button/Provider";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Discrr | Ratings & Reviews",
    template: "%s | Discrr",
  },
  keywords: [
    "Disc Golf",
    "Disc",
    "Ratings",
    "Reviews",
    "PDGA approved",
    "new disc",
    "search",
    "Disc golf discs",
    "PDGA approved discs",
    "Flight paths",
    "Flight numbers",
    "Disc golf disc database",
    "Disc reviews and ratings",
    "Disc specifications",
    "Disc comparison tool",
    "Disc search engine",
    "Disc golf equipment",
    "Flight characteristics",
    "Disc golf disc finder",
    "Disc golf disc recommendations",
    "Disc golf disc reviews",
    "Disc golf disc guide",
    "Disc golf disc comparison",
    "Disc golf disc performance",
    "Best disc golf discs",
    "Disc golf disc rankings",
    "Disc golf disc selection",
  ],
  description:
    "The #1 Website for Disc Golf Disc Ratings & Reviews. Search for any PDGA Approved Discs and see other's ratings and reviews. Sign-in to leave your own ratings and reviews.",
  manifest: `https://discrr.com/site.webmanifest`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={`${space?.className} `}>
      <meta name="theme-color" content="#ffcd65" />

      <body>
        <Provider>
          <ThemeProvider>
            <Nav />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
