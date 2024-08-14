export default function ServiceLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center">{children}</div>
  );
}
