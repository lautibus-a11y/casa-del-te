export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "tes" | "pastelería" | "brunch";
  /** Subtipo visible en tés (negro, verde, matcha) */
  variety?: string;
  tags?: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  category: "ambiente" | "taza" | "pastelería" | "gente";
  size: "large" | "medium" | "small"; // For masonry variations
}

export interface TeaEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  price: string;
  slotsAvailable: number;
  image: string;
}

export interface AmbientTrack {
  id: string;
  name: string;
  url: string;
  iconName: string; // for lucide representation
}
