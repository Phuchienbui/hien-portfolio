/** A real recommendation from a person who worked with the site owner. */
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  /** Portrait path in `public/`; empty if the person gave no photo. */
  photo: string;
}
