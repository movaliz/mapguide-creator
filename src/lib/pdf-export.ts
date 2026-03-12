import type { Place } from "./csv-parser";

export function generatePrintHTML(places: Place[], watermark: boolean): string {
  const rows = places
    .map(
      (p, i) => `
    <tr>
      <td style="padding:12px 16px;color:#6b7280;text-align:right;width:40px;font-variant-numeric:tabular-nums;">${i + 1}</td>
      <td style="padding:12px 16px;">
        <strong style="font-family:'DM Serif Display',serif;font-size:1.15rem;">${escapeHtml(p.title)}</strong>
        ${p.note ? `<br/><span style="color:#9ca3af;font-size:0.875rem;">${escapeHtml(p.note)}</span>` : ""}
      </td>
    </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html><head>
<meta charset="utf-8"/>
<title>ExportPlaces Guide</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Figtree:wght@400;500&display=swap" rel="stylesheet">
<style>
  body { font-family: 'Figtree', sans-serif; max-width: 700px; margin: 40px auto; color: #1a1a2e; }
  table { width: 100%; border-collapse: collapse; }
  tr { border-bottom: 1px solid #e5e7eb; }
  ${watermark ? `.watermark { position: fixed; bottom: 20px; right: 20px; color: #d1d5db; font-size: 0.75rem; }` : ""}
  @media print { body { margin: 0; } }
</style>
</head><body>
<h1 style="font-family:'DM Serif Display',serif;margin-bottom:24px;">Your Saved Places</h1>
<table>${rows}</table>
${watermark ? '<div class="watermark">Generated with ExportPlaces</div>' : ""}
</body></html>`;
}

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function printPlaces(places: Place[], watermark: boolean) {
  const html = generatePrintHTML(places, watermark);
  const win = window.open("", "_blank");
  if (win) {
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 500);
  }
}

export function downloadPDF(places: Place[], watermark: boolean) {
  // Use print-to-PDF via browser for now
  const html = generatePrintHTML(places, watermark);
  const win = window.open("", "_blank");
  if (win) {
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 500);
  }
}
