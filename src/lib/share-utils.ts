import type { Place } from "./json-parser";

/** Compress places into a URL-safe base64 string */
export function encodePlaces(places: Place[]): string {
  const minimal = places.map((p) => ({
    t: p.title,
    a: p.address,
    u: p.url,
    la: p.lat,
    ln: p.lng,
  }));
  const json = JSON.stringify(minimal);
  // Use TextEncoder + btoa for compact encoding
  const bytes = new TextEncoder().encode(json);
  const binary = Array.from(bytes, (b) => String.fromCharCode(b)).join("");
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/** Decode places from a URL-safe base64 string */
export function decodePlaces(encoded: string): Place[] {
  try {
    const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    const json = new TextDecoder().decode(bytes);
    const minimal = JSON.parse(json) as Array<{
      t: string;
      a: string;
      u: string;
      la: number | null;
      ln: number | null;
    }>;
    return minimal.map((m) => ({
      title: m.t,
      address: m.a,
      url: m.u,
      lat: m.la,
      lng: m.ln,
      date: null,
    }));
  } catch {
    return [];
  }
}

/** Generate a shareable URL for places */
export function generateShareUrl(places: Place[]): string {
  const encoded = encodePlaces(places);
  return `${window.location.origin}/share#${encoded}`;
}
