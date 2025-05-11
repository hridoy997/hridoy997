import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio - Arman Hossain Hridoy",
  description: "Passionate Developer | Creative Problem Solver | Tech Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`} suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}