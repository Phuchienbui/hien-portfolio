import { Routes } from "@angular/router";

import { Home } from "./pages/home/home";

/** Application routes: home with section anchors plus the two legal pages (lazy loaded). */
export const ROUTES: Routes = [
  { path: "", component: Home },
  {
    path: "legal-notice",
    loadComponent: () => import("./pages/legal-notice/legal-notice").then((m) => m.LegalNotice),
  },
  {
    path: "privacy-policy",
    loadComponent: () =>
      import("./pages/privacy-policy/privacy-policy").then((m) => m.PrivacyPolicy),
  },
  { path: "**", redirectTo: "" },
];
