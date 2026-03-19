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
    label: "Timeline",
    href: "/timeline",
  },
  {
    label: "Taiwan",
    href: "",
    children: [
      {
        "label": "Sim Cards",
        "href": "/mobile"
      },
      {
        "label": "Banking",
        "href": "/banking"
      },
      {
        "label": "Transportation",
        "href": "/transport"
      },
      {
        "label": "ARC Card",
        "href": "/residency"
      }
    ]
  },
  {
    label: "NTUST",
    href: "/NTUST",
    children: [
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
