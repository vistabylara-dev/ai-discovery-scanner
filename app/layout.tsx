import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Discovery Scanner",
  description:
    "Analyze websites for AI Discovery readiness, structured data, semantic architecture, and technical implementation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, Helvetica, sans-serif",
          background: "#0b0b0b",
          color: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
