import "./globals.css";

export const metadata = {
  title: "Kite Search — Find the World's Best Kite Surfing Spots",
  description: "Discover and explore kite surfing spots across the globe. Filter by wind season, difficulty, and location.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}