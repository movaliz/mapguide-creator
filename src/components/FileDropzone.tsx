import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

interface FileDropzoneProps {
  onFileSelect: (file: File) => void;
}

const FileDropzone = ({ onFileSelect }: FileDropzoneProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file && file.name.endsWith(".json")) {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) onFileSelect(file);
    };
    input.click();
  };

  return (
    <motion.button
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`w-full max-w-lg mx-auto flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed p-12 transition-all duration-150 cursor-pointer ${
        isDragging
          ? "border-accent bg-accent/5"
          : "border-muted-foreground/30 hover:border-primary/50 hover:bg-surface/50"
      }`}
    >
      <div className="rounded-full bg-surface p-4">
        <Upload className="h-6 w-6 text-primary" />
      </div>
      <div className="text-center">
        <p className="text-label text-primary">Upload Saved Places.json</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Drag & drop or click to browse
        </p>
      </div>
    </motion.button>
  );
};

export default FileDropzone;
