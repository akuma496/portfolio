export const metadata = {
  title: "Aditya Kumar — Distributed Systems Engineer",
  description:
    "Portfolio of Aditya Kumar — Distributed Systems Engineer specializing in high-throughput pipelines, cloud-native orchestration, and resilient infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}