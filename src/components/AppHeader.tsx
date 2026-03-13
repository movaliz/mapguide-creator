import { MapPin } from "lucide-react";

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
          <div className="w-9 h-9 rounded-2xl bg-primary flex items-center justify-center">
            <MapPin className="text-primary-foreground h-4 w-4" />
          </div>
          <span className="font-display text-xl text-foreground">exportmymap.com</span>
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
                className="rounded-2xl px-4 py-2.5 text-sm font-medium bg-card text-foreground border border-border hover:border-primary/30 hover:bg-primary-soft transition-all hidden sm:block"
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
