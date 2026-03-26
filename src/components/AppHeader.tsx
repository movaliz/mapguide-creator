import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

interface AppHeaderProps {
  hasPlaces: boolean;
  onExportPDF: () => void;
  onPrint: () => void;
  onShare: () => void;
}

const AppHeader = ({ hasPlaces, onExportPDF, onPrint, onShare }: AppHeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
            <MapPin className="text-background h-4 w-4" />
          </div>
          <span className="font-display text-lg text-foreground">exportmymap.com</span>
        </Link>
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
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground border border-border hover:bg-foreground hover:text-background transition-all hidden sm:block"
              >
                {label}
              </button>
            ))}
          </div>
        ) : (
          <nav className="hidden sm:flex items-center gap-8">
            <a href="#how-it-works" onClick={(e) => handleAnchorClick(e, "#how-it-works")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <a href="#pricing" onClick={(e) => handleAnchorClick(e, "#pricing")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" onClick={(e) => handleAnchorClick(e, "#faq")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
