// ─── Hero grid ───────────────────────────────────────────────────────────────

export const heroPhotos = {
  main:        { src: "/images/hero-1.jpg", alt: "Portrait in blue suit, Amman" },
  topMiddle:   { src: "/images/hero-2.jpg", alt: "Outdoor portrait in grey blazer" },
  topRight:    { src: "/images/hero-3.jpg", alt: "Formal portrait against greenery" },
  bottomMiddle:{ src: "/images/hero-4.jpg", alt: "Portrait, natural light" },
  bottomRight: { src: "/images/hero-5.jpg", alt: "Duo portrait, formal wear" },
};

// ─── Selected Work (home page gallery) ───────────────────────────────────────

export const selectedWork = [
  { src: "/images/work-1.jpg", alt: "Duo portrait in tailored suits", series: "Series I",   title: "Portraits"  },
  { src: "/images/work-2.jpg", alt: "Graduation portrait in navy suit, outdoors",  series: "Series II",  title: "Graduation"   },
  { src: "/images/work-3.jpg", alt: "Portrait in grey three-piece suit", series: "Series III", title: "Fine Art"   },
];

// ─── About page ──────────────────────────────────────────────────────────────

export const photographerPortrait = {
  src: "/images/yazan.jpg",
  alt: "Yazan Tahseen — portrait photographer, Amman",
};

// ─── Full series galleries ────────────────────────────────────────────────────

export type Photo = {
  id: number;
  src: string;
  alt: string;
  series: string;
  title: string;
  category: "portraits" | "weddings" | "fine-art";
};

export const photos: Photo[] = [
  // ── Series I — Portraits ──────────────────────────────────────────────────
  { id: 1,  src: "/images/series1-01.jpg", alt: "Portrait in blue suit",              series: "Series I", title: "In Repose",         category: "portraits" },
  { id: 2,  src: "/images/series1-02.jpg", alt: "Outdoor portrait, grey blazer",       series: "Series I", title: "Amman Morning",     category: "portraits" },
  { id: 3,  src: "/images/series1-03.jpg", alt: "Portrait under tree, black suit",     series: "Series I", title: "Stillness",         category: "portraits" },
  { id: 4,  src: "/images/series1-04.jpg", alt: "Portrait on steps, blue suit",        series: "Series I", title: "Amman Dusk",        category: "portraits" },
  { id: 5,  src: "/images/series1-05.jpg", alt: "Close portrait, dark background",     series: "Series I", title: "The Weight",        category: "portraits" },
  { id: 6,  src: "/images/series1-06.jpg", alt: "Full-length portrait outdoors",       series: "Series I", title: "Open Ground",       category: "portraits" },
  { id: 7,  src: "/images/series1-07.jpg", alt: "Portrait, neutral expression",        series: "Series I", title: "Quiet",             category: "portraits" },
  { id: 8,  src: "/images/series1-08.jpg", alt: "Portrait in warm light",              series: "Series I", title: "Afternoon",         category: "portraits" },
  { id: 9,  src: "/images/series1-09.jpg", alt: "Portrait, soft directional light",    series: "Series I", title: "Diffused",          category: "portraits" },
  { id: 10, src: "/images/series1-10.jpg", alt: "Close study, available light",        series: "Series I", title: "Study I",           category: "portraits" },

  // ── Series II — Graduation ───────────────────────────────────────────────
  { id: 11, src: "/images/series2-01.jpg", alt: "Graduation portrait in blue suit against hedges",   series: "Series II", title: "Cap and Confidence", category: "weddings"  },
  { id: 12, src: "/images/series2-02.jpg", alt: "Graduation duo portrait in tailored suits",         series: "Series II", title: "Classmates",         category: "weddings"  },
  { id: 13, src: "/images/series2-03.jpg", alt: "Graduation group portrait, formal poses",           series: "Series II", title: "Graduation Day",     category: "weddings"  },
  { id: 14, src: "/images/series2-04.jpg", alt: "Graduation portrait, outdoor setting",              series: "Series II", title: "First Milestone",    category: "weddings"  },
  { id: 15, src: "/images/series2-05.jpg", alt: "Formal graduation portrait, warm tones",            series: "Series II", title: "Proud Moment",       category: "weddings"  },
  { id: 16, src: "/images/series2-06.jpg", alt: "Graduation portrait in navy suit outdoors",         series: "Series II", title: "New Chapter",        category: "weddings"  },
  { id: 17, src: "/images/series2-07.jpg", alt: "Natural light graduation portrait",                 series: "Series II", title: "After the Ceremony", category: "weddings"  },
  { id: 18, src: "/images/series2-08.jpg", alt: "Graduation portrait, stone background",             series: "Series II", title: "Campus Stone",       category: "weddings"  },
  { id: 19, src: "/images/series2-09.jpg", alt: "Graduation portrait, warm afternoon light",         series: "Series II", title: "Golden Hour Grad",   category: "weddings"  },
  { id: 20, src: "/images/series2-10.jpg", alt: "Graduation portrait, garden setting",               series: "Series II", title: "The Walk Forward",   category: "weddings"  },

  // ── Series III — Fine Art ─────────────────────────────────────────────────
  { id: 21, src: "/images/series3-01.jpg", alt: "Study in form, dramatic light",       series: "Series III", title: "Study 01",         category: "fine-art"  },
  { id: 22, src: "/images/series3-02.jpg", alt: "Composed portrait, spare backdrop",   series: "Series III", title: "Study 02",         category: "fine-art"  },
  { id: 23, src: "/images/series3-03.jpg", alt: "Formal study, available light",       series: "Series III", title: "Study 03",         category: "fine-art"  },
  { id: 24, src: "/images/series3-04.jpg", alt: "Portrait study, warm tones",          series: "Series III", title: "Study 04",         category: "fine-art"  },
  { id: 25, src: "/images/series3-05.jpg", alt: "Figure study, natural setting",       series: "Series III", title: "Study 05",         category: "fine-art"  },
  { id: 26, src: "/images/series3-06.jpg", alt: "Environmental portrait",              series: "Series III", title: "Study 06",         category: "fine-art"  },
  { id: 27, src: "/images/series3-07.jpg", alt: "Portrait, blue suit, hedges",         series: "Series III", title: "Study 07",         category: "fine-art"  },
  { id: 28, src: "/images/series3-08.jpg", alt: "Outdoor study, grey blazer",          series: "Series III", title: "Study 08",         category: "fine-art"  },
  { id: 29, src: "/images/series3-09.jpg", alt: "Portrait on steps",                   series: "Series III", title: "Study 09",         category: "fine-art"  },
  { id: 30, src: "/images/series3-10.jpg", alt: "Close study, available light",        series: "Series III", title: "Study 10",         category: "fine-art"  },
];
