export interface Place {
  title: string;
  note: string;
  url: string;
  comment: string;
}

export function parseGoogleMapsCSV(text: string): Place[] {
  const lines = text.split('\n');
  if (lines.length < 2) return [];

  // Find header line
  const headerLine = lines[0];
  const headers = parseCSVLine(headerLine).map(h => h.trim().toLowerCase());

  const titleIdx = headers.indexOf('title');
  const noteIdx = headers.indexOf('note');
  const urlIdx = headers.indexOf('url');
  const commentIdx = headers.indexOf('comment');

  if (titleIdx === -1) {
    throw new Error('Could not find "Title" column. Please make sure you\'re using a Saved places CSV from Google Takeout.');
  }

  const places: Place[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const cols = parseCSVLine(line);
    const title = cols[titleIdx]?.trim() || '';
    if (!title) continue;
    places.push({
      title,
      note: noteIdx >= 0 ? cols[noteIdx]?.trim() || '' : '',
      url: urlIdx >= 0 ? cols[urlIdx]?.trim() || '' : '',
      comment: commentIdx >= 0 ? cols[commentIdx]?.trim() || '' : '',
    });
  }
  return places;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (inQuotes) {
      if (char === '"' && line[i + 1] === '"') {
        current += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        current += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
  }
  result.push(current);
  return result;
}
