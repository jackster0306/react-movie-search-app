import BackButton from "@/app/components/back-button";

export default function MoviesPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <header className="flex flex-col items-left min-h-screen text-white h-6">
      {/* Back to Home Button */}
      <BackButton />
      <main>
        {children}
      </main>
    </header>
    );
}