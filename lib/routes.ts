export type RouteItem = {
  label: string;
  href: string;
  /**
   * Optional children for nested navigation (e.g., dropdowns).
   */
  children?: RouteItem[];
};

export const routes: RouteItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Timeline",
    href: "/timeline",
  },
  {
    label: "NTUST",
    href: "/NTUST",
    children: [
      {
        label: "Overview",
        href: "/NTUST",
      },
      {
        label: "Classes",
        href: "/NTUST/classes",
      },
      {
        label: "Course Selection",
        href: "/NTUST/course-selection",
      },
    ],
  },
];
