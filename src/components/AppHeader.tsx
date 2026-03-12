import MapPin from "./MapPin";

interface AppHeaderProps {
  hasPlaces: boolean;
  onExportPDF: () => void;
  onPrint: () => void;
  onShare: () => void;
}

const AppHeader = ({ hasPlaces, onExportPDF, onPrint, onShare }: AppHeaderProps) => {
  return (
    <header className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center gap-2">
        <MapPin className="text-primary h-5 w-5" />
        <span className="font-display text-xl text-foreground">ExportPlaces</span>
      </div>
      {hasPlaces && (
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
      )}
    </header>
  );
};

export default AppHeader;
