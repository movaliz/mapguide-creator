import jsPDF from "jspdf";
import type { Place } from "./json-parser";
import { getCountryCode, countryFlag } from "./country-utils";

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

export function downloadPDF(places: Place[], _watermark: boolean) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const marginL = 18;
  const marginR = 18;
  const contentW = pageW - marginL - marginR;
  let y = 20;

  const now = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("My Saved Places", marginL, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(120, 120, 120);
  doc.text(`${places.length} places · Exported ${now}`, marginL, y);
  y += 4;

  // Divider
  doc.setDrawColor(200, 200, 200);
  doc.line(marginL, y, pageW - marginR, y);
  y += 8;

  doc.setTextColor(30, 30, 30);

  places.forEach((p, i) => {
    // Check if we need a new page
    if (y > pageH - 25) {
      doc.addPage();
      y = 20;
    }

    const num = `${i + 1}.`;
    const date = formatDate(p.date);
    const cc = getCountryCode(p.address);
    const countryLabel = cc ? ` [${cc}]` : "";

    // Number
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text(num, marginL, y);

    const textX = marginL + 10;

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(26, 26, 46);
    const titleLines = doc.splitTextToSize(p.title + countryLabel, contentW - 10);
    doc.text(titleLines, textX, y);
    y += titleLines.length * 5;

    // Address
    if (p.address) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      const addrLines = doc.splitTextToSize(p.address, contentW - 10);
      doc.text(addrLines, textX, y);
      y += addrLines.length * 4;
    }

    // Date
    if (date) {
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Saved ${date}`, textX, y);
      y += 3.5;
    }

    // URL
    if (p.url) {
      doc.setFontSize(7.5);
      doc.setTextColor(37, 99, 235);
      const urlLines = doc.splitTextToSize(p.url, contentW - 10);
      doc.textWithLink(urlLines[0], textX, y, { url: p.url });
      y += 4;
    }

    y += 5; // spacing between entries
  });

  // Watermark
  if (_watermark) {
    const pageCount = doc.getNumberOfPages();
    for (let pg = 1; pg <= pageCount; pg++) {
      doc.setPage(pg);
      doc.setFontSize(7);
      doc.setTextColor(200, 200, 200);
      doc.text("Generated with exportmymap.com", pageW - marginR, pageH - 10, { align: "right" });
    }
  }

  doc.save("exportmymap-places.pdf");
}

export function printPlaces(places: Place[]) {
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

  const html = `<!DOCTYPE html>
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

  const win = window.open("", "_blank");
  if (win) {
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 500);
  }
}

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
