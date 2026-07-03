// Minimal i18n layer: a single dictionary keyed by dot-path, with each leaf
// carrying both an `es` and `en` copy. The language picker in the UI has
// been removed for this portfolio (single-language, English), so both
// leaves intentionally hold the same English string -- the structure is
// left in place in case bilingual support is wanted again later.
export type Lang = "es" | "en";

export const LANGUAGES: Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "en";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).es === "string";
}

// Helper so every leaf below only has to state the copy once.
const en = (text: string): Leaf => ({ es: text, en: text });

export const DICT = {
  picker: {
    season: { es: "Season", en: "Season" },
    language: { es: "Language", en: "Language" },
  },
  seasons: {
    spring: { es: "Spring", en: "Spring" },
    summer: { es: "Summer", en: "Summer" },
    autumn: { es: "Autumn", en: "Autumn" },
    winter: { es: "Winter", en: "Winter" },
  },
  nav: {
    aria: en("Sections"),
    home: en("Home"),
    stack: en("Stack"),
    experience: en("Highlights"),
    project: en("Project"),
    contact: en("Contact"),
  },
  header: {
    availability: en("Open to opportunities"),
  },
  hero: {
    greeting: en("Hi, I'm"),
    roleLine: en("AI/ML Engineer & Full-Stack Developer."),
    tagline: en("Final-year CSE-AI student who ships working systems, not just prototypes."),
    cv: en("Download CV"),
    hire: en("Contact me"),
    scroll: en("Scroll to explore"),
    keysHint: en("· hover over the keys"),
  },
  stack: {
    title: en("Tech Stack"),
    hint: en("(hint: hover over a key)"),
    hintMobile: en("The tools I build with."),
  },
  experience: {
    title: en("Highlights"),
    subtitle: en("Numbers from the systems I've built."),
  },
  projects: {
    kicker: en("project"),
    viewMore: en("View more"),
    openSite: en("Visit demo"),
    viewCode: en("View code"),
    close: en("Close"),
    stackLabel: en("Stack"),
    overview: en("Overview"),
  },
  contact: {
    kicker: en("contact"),
    title: en("Let's talk?"),
    body: en(
      "Looking for an entry-level AI/ML or full-stack role -- if what you've seen interests you, the keyboard is ready for the first message."
    ),
    copyEmail: en("Copy email"),
    openMail: en("Open mailto"),
    github: en("GitHub"),
    linkedin: en("LinkedIn"),
    emailToast: en("Email copied"),
    footer: en("© 2026 Vattikuti Mohit. All rights reserved."),
  },
  keyboard: {
    taglines: {
      cplusplus: en("Raw bytes, zero libraries, full control."),
      python: en("Reads like English, scales like a rocket."),
      openjdk: en("Write once, run (almost) anywhere."),
      javascript: en("Where the browser comes alive."),
      mysql: en("Rows, joins, and queries that actually scale."),
      pytorch: en("Tensors, autograd, and a lot of Grad-CAM."),
      tensorflow: en("The other half of the deep learning toolbox."),
      scikitlearn: en("Classic ML, still doing the heavy lifting."),
      react: en("Components, components, components."),
      nodedotjs: en("JavaScript on the server."),
      git: en("History and a time machine for your code."),
      github: en("Where the projects actually live."),
      numpy: en("Arrays, vectors, and the Mel-spectrogram pipeline."),
      huggingface: en("Where the deepfake detector demo lives."),
      streamlit: en("Turns a notebook into a real demo."),
    },
  },
} as const satisfies Record<string, Node>;

// Resolve a dotted path in the dictionary for a given language.
export function translate(path: string, lang: Lang): string {
  const parts = path.split(".");
  let ref: Node = DICT as unknown as Node;
  for (const p of parts) {
    if (isLeaf(ref)) return path;
    ref = (ref as { [key: string]: Node })[p];
    if (ref === undefined) return path;
  }
  if (isLeaf(ref)) return ref[lang] ?? ref.es ?? path;
  return path;
}
