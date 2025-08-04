import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "np" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded font-semibold"
    >
      {i18n.language === "en" ? "नेपालीमा हेर्नुहोस्" : "View in English"}
    </Button>
  );
};
