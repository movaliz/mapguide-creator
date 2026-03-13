import MapPin from "./MapPin";

interface AppHeaderProps {
  hasPlaces: boolean;
  onExportPDF: () => void;
  onPrint: () => void;
  onShare: () => void;
}

const AppHeader = ({ hasPlaces, onExportPDF, onPrint, onShare }: AppHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <MapPin className="text-primary-foreground h-4 w-4" />
          </div>
          <span className="font-display text-xl font-semibold text-foreground">ExportPlaces</span>
        </div>
        {hasPlaces ? (
          <div className="flex items-center gap-2">
            {[
              { label: "Download PDF", action: onExportPDF },
              { label: "Print List", action: onPrint },
              { label: "Share Link", action: onShare },
            ].map(({ label, action }) => (
              <button
                key={label}
                onClick={action}
                className="rounded-lg px-4 py-2.5 text-label bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors hidden sm:block"
              >
                {label}
              </button>
            ))}
          </div>
        ) : (
          <nav className="hidden sm:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
