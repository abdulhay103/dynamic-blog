import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dynamic Blog site",
  description: "Develop with Faisal Vai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <div className="container mx-auto py-10">{children}</div>
      </body>
    </html>
  );
}
