import { Link2, FileDown, Printer } from "lucide-react";

export type ViewFormat = "share" | "pdf" | "print";

interface FormatToggleProps {
  active: ViewFormat;
  onChange: (format: ViewFormat) => void;
}

const formats: { id: ViewFormat; label: string; icon: typeof Link2 }[] = [
  { id: "share", label: "Share Link", icon: Link2 },
  { id: "pdf", label: "Download PDF", icon: FileDown },
  { id: "print", label: "Print", icon: Printer },
];

const FormatToggle = ({ active, onChange }: FormatToggleProps) => (
  <div className="flex gap-1 p-1 bg-card border border-border rounded-full w-fit shadow-soft">
    {formats.map(({ id, label, icon: Icon }) => (
      <button
        key={id}
        onClick={() => onChange(id)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          active === id
            ? "bg-primary text-primary-foreground shadow-soft"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Icon className="w-4 h-4" />
        <span className="hidden sm:inline">{label}</span>
      </button>
    ))}
  </div>
);

export default FormatToggle;
