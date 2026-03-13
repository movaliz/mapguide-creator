export interface Place {
  title: string;
  address: string;
  url: string;
  lat: number | null;
  lng: number | null;
}

interface TakeoutFeature {
  geometry?: { coordinates?: number[] };
  properties?: {
    Title?: string;
    "Google Maps URL"?: string;
    Location?: {
      Address?: string;
      "Country Code"?: string;
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
    const title = props?.Title?.trim();
    if (!title) continue;

    const coords = feature.geometry?.coordinates;
    places.push({
      title,
      address: props?.Location?.Address?.trim() || "",
      url: props?.["Google Maps URL"]?.trim() || "",
      lat: coords && coords.length >= 2 ? coords[1] : null,
      lng: coords && coords.length >= 2 ? coords[0] : null,
    });
  }
  return places;
}
