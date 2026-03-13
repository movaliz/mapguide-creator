export interface Place {
  title: string;
  address: string;
  url: string;
  lat: number | null;
  lng: number | null;
  date: string | null;
}

/** Build a reliable Google Maps link from coordinates */
export function buildMapsUrl(lat: number | null, lng: number | null): string {
  if (lat === null || lng === null) return "";
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

interface TakeoutFeature {
  geometry?: { coordinates?: number[] };
  properties?: {
    date?: string;
    google_maps_url?: string;
    location?: {
      name?: string;
      address?: string;
      country_code?: string;
    };
  };
}

interface TakeoutGeoJSON {
  type: string;
  features: TakeoutFeature[];
}

export function parseGoogleMapsJSON(text: string): Place[] {
  let data: TakeoutGeoJSON;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON file. Please upload a valid Saved Places.json from Google Takeout.");
  }

  if (!data.features || !Array.isArray(data.features)) {
    throw new Error('Could not find "features" array. Make sure this is a Saved Places.json from Google Takeout.');
  }

  const places: Place[] = [];
  for (const feature of data.features) {
    const props = feature.properties;
    const loc = props?.location;
    const title = loc?.name?.trim();
    if (!title) continue;

    const coords = feature.geometry?.coordinates;
    const lat = coords && coords.length >= 2 ? coords[1] : null;
    const lng = coords && coords.length >= 2 ? coords[0] : null;

    places.push({
      title,
      address: loc?.address?.trim() || "",
      url: buildMapsUrl(lat, lng),
      lat,
      lng,
      date: props?.date || null,
    });
  }
  return places;
}
