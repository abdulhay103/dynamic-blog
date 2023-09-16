import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import NavigateProgress from "./components/NavigateProgress";
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
      <body
        className={`${inter.className} bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100`}
      >
        <NavigateProgress />
        <Toaster position="top-center" />
        <Header />
        <div className="container mx-auto py-20">{children}</div>
      </body>
    </html>
  );
}
