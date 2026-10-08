import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter, withInMemoryScrolling } from "@angular/router";

import { ROUTES } from "./app.routes";
import { provideScrollOffset } from "./core/scroll-offset";

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideScrollOffset(),
    provideRouter(
      ROUTES,
      withInMemoryScrolling({ anchorScrolling: "enabled", scrollPositionRestoration: "enabled" }),
    ),
  ],
};
