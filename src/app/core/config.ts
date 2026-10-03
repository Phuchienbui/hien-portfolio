/**
 * URL that receives the contact form messages (POST, JSON).
 * Empty until the server exists: the form then only works in development mode (mock),
 * the production build shows an error state instead of pretending to send.
 */
export const CONTACT_ENDPOINT = "";

/** Simulated network delay of the development mock, in milliseconds. */
export const CONTACT_MOCK_DELAY_MS = 400;
