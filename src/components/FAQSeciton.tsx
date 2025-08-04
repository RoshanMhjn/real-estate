import { useTranslation } from "react-i18next";
import { faqs } from "../types/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const FAQSection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 pb-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">{t("faq.title")}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
