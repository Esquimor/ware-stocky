import translationEN from "./en.json";
import translationFR from "./fr.json";

export enum Languages {
  EN = "EN",
  FR = "FR",
}

// the translations
const resources = {
  [Languages.EN]: {
    translation: translationEN,
  },
  [Languages.FR]: {
    translation: translationFR,
  },
};

export default resources;
