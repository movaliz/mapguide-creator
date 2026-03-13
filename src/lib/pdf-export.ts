import type { Place } from "./json-parser";

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(dateStr));
  } catch {
    return "";
  }
}

function getCountryFromAddress(address: string): string {
  const parts = address.split(",").map((s) => s.trim());
  return parts[parts.length - 1] || "";
}

export function generatePdfHTML(places: Place[], watermark: boolean): string {
  const now = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  const rows = places
    .map((p, i) => {
      const date = formatDate(p.date);
      const country = getCountryFromAddress(p.address);
      return `
    <tr>
      <td style="padding:14px 16px;color:#9ca3af;text-align:right;width:36px;font-variant-numeric:tabular-nums;vertical-align:top;font-size:0.875rem;">${i + 1}</td>
      <td style="padding:14px 16px;vertical-align:top;">
        <div style="display:flex;align-items:flex-start;gap:8px;">
          <span style="font-size:1.1rem;line-height:1;">📍</span>
          <div>
            <strong style="font-family:'DM Sans','Inter',sans-serif;font-size:1.1rem;font-weight:700;color:#1a1a2e;">${escapeHtml(p.title)}</strong>
            ${p.address ? `<div style="color:#6b7280;font-size:0.85rem;margin-top:3px;">${escapeHtml(p.address)}</div>` : ""}
            <div style="display:flex;gap:16px;margin-top:4px;font-size:0.8rem;color:#9ca3af;">
              ${country ? `<span>${escapeHtml(country)}</span>` : ""}
              ${date ? `<span>Saved ${date}</span>` : ""}
            </div>
            ${p.url ? `<div style="margin-top:4px;font-size:0.75rem;word-break:break-all;"><a href="${escapeHtml(p.url)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(p.url)}</a></div>` : ""}
          </div>
        </div>
      </td>
    </tr>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html><head>
<meta charset="utf-8"/>
<title>My Saved Places — exportmymap.com</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'DM Sans', sans-serif; max-width: 700px; margin: 40px auto; color: #1a1a2e; padding: 0 24px; }
  table { width: 100%; border-collapse: collapse; }
  tr { border-bottom: 1px solid #f0f0f0; }
  tr:last-child { border-bottom: none; }
  .header { margin-bottom: 32px; padding-bottom: 20px; border-bottom: 2px solid #1a1a2e; }
  .header h1 { font-family: 'DM Serif Display', Georgia, serif; font-size: 1.75rem; margin-bottom: 4px; }
  .header p { color: #9ca3af; font-size: 0.85rem; }
  ${watermark ? `.watermark { position: fixed; bottom: 20px; right: 24px; color: #d1d5db; font-size: 0.7rem; }` : ""}
  @media print {
    body { margin: 0; padding: 20px; }
    tr { page-break-inside: avoid; }
  }
</style>
</head><body>
<div class="header">
  <h1>My Saved Places</h1>
  <p>${places.length} places · Exported ${now}</p>
</div>
<table>${rows}</table>
${watermark ? '<div class="watermark">Generated with exportmymap.com</div>' : ""}
</body></html>`;
}

export function generatePrintHTML(places: Place[]): string {
  const rows = places
    .map(
      (p, i) => `
    <tr>
      <td style="padding:4px 8px 4px 0;text-align:right;width:30px;vertical-align:top;font-size:0.85rem;">${i + 1}.</td>
      <td style="padding:4px 0;vertical-align:top;">
        <strong>${escapeHtml(p.title)}</strong>
        ${p.address ? ` — ${escapeHtml(p.address)}` : ""}
        ${p.url ? `<br/><a href="${escapeHtml(p.url)}" style="font-size:0.75rem;color:#2563eb;text-decoration:none;">${escapeHtml(p.url)}</a>` : ""}
      </td>
    </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html><head>
<meta charset="utf-8"/>
<title>Saved Places</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Arial, sans-serif; max-width: 700px; margin: 20px auto; color: #000; font-size: 0.9rem; padding: 0 16px; }
  table { width: 100%; border-collapse: collapse; }
  tr { border-bottom: 1px solid #ddd; }
  tr:last-child { border-bottom: none; }
  @media print { body { margin: 0; padding: 10px; } }
</style>
</head><body>
<table>${rows}</table>
</body></html>`;
}

export function downloadPDF(places: Place[], watermark: boolean) {
  const html = generatePdfHTML(places, watermark);
  const win = window.open("", "_blank");
  if (win) {
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 500);
  }
}

export function printPlaces(places: Place[]) {
  const html = generatePrintHTML(places);
  const win = window.open("", "_blank");
  if (win) {
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 500);
  }
}
