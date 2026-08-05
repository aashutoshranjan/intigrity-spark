// Offer letter catalogue.
// To add / replace a letter: drop the PDF into `public/offer-letters/` and make
// sure an entry below points at it. No other code changes are required.

export type OfferLetter = {
  /** Unique slug — also used as the downloaded file name. */
  id: string;
  /** Candidate or batch label shown on the card. */
  title: string;
  /** Short helper line (batch code, cohort, domain...). */
  description: string;
  /** Path inside /public. Keep it relative so any custom domain works. */
  file: string;
};

export const OFFER_LETTERS: OfferLetter[] = [
  { id: "offer-letter-01", title: "Offer Letter 01", description: "Full-Stack Development · Batch A", file: "/offer-letters/offer-letter-01.pdf" },
  { id: "offer-letter-02", title: "Offer Letter 02", description: "Full-Stack Development · Batch A", file: "/offer-letters/offer-letter-02.pdf" },
  { id: "offer-letter-03", title: "Offer Letter 03", description: "Full-Stack Development · Batch B", file: "/offer-letters/offer-letter-03.pdf" },
  { id: "offer-letter-04", title: "Offer Letter 04", description: "Data Analytics · Batch A", file: "/offer-letters/offer-letter-04.pdf" },
  { id: "offer-letter-05", title: "Offer Letter 05", description: "Data Analytics · Batch A", file: "/offer-letters/offer-letter-05.pdf" },
  { id: "offer-letter-06", title: "Offer Letter 06", description: "Data Analytics · Batch B", file: "/offer-letters/offer-letter-06.pdf" },
  { id: "offer-letter-07", title: "Offer Letter 07", description: "Cloud Engineering · Batch A", file: "/offer-letters/offer-letter-07.pdf" },
  { id: "offer-letter-08", title: "Offer Letter 08", description: "Cloud Engineering · Batch A", file: "/offer-letters/offer-letter-08.pdf" },
  { id: "offer-letter-09", title: "Cloud Engineering · Batch B", description: "Cloud Engineering · Batch B", file: "/offer-letters/offer-letter-09.pdf" },
  { id: "offer-letter-10", title: "Offer Letter 10", description: "Software Testing · Batch A", file: "/offer-letters/offer-letter-10.pdf" },
  { id: "offer-letter-11", title: "Offer Letter 11", description: "Software Testing · Batch A", file: "/offer-letters/offer-letter-11.pdf" },
  { id: "offer-letter-12", title: "Offer Letter 12", description: "Software Testing · Batch B", file: "/offer-letters/offer-letter-12.pdf" },
  { id: "offer-letter-13", title: "Offer Letter 13", description: "Full-Stack Development · Batch C", file: "/offer-letters/offer-letter-13.pdf" },
  { id: "offer-letter-14", title: "Offer Letter 14", description: "Data Analytics · Batch C", file: "/offer-letters/offer-letter-14.pdf" },
  { id: "offer-letter-15", title: "Offer Letter 15", description: "Cloud Engineering · Batch C", file: "/offer-letters/offer-letter-15.pdf" },
  { id: "offer-letter-16", title: "Offer Letter 16", description: "Software Testing · Batch C", file: "/offer-letters/offer-letter-16.pdf" },
  { id: "offer-letter-17", title: "Offer Letter 17", description: "Full-Stack Development · Batch D", file: "/offer-letters/offer-letter-17.pdf" },
  { id: "offer-letter-18", title: "Offer Letter 18", description: "Data Analytics · Batch D", file: "/offer-letters/offer-letter-18.pdf" },
  { id: "offer-letter-19", title: "Offer Letter 19", description: "Cloud Engineering · Batch D", file: "/offer-letters/offer-letter-19.pdf" },
  { id: "offer-letter-20", title: "Offer Letter 20", description: "Software Testing · Batch D", file: "/offer-letters/offer-letter-20.pdf" },
];
