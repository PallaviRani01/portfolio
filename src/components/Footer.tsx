interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Built with React, TypeScript, Three.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
