export interface TimelineLink {
  label: string;
  href: string;
}

export interface TimelineEntry {
  id: string;
  dateLabel?: string;
  title: string;
  description?: string;
  links?: TimelineLink[];
  icon?: string;
  tags?: string[];
  order?: number;
}
