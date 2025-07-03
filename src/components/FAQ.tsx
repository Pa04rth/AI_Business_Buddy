
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI content generation work?",
      answer: "Our AI uses advanced language models trained on millions of high-quality content pieces. Simply provide a topic or brief, and our AI will generate human-like content tailored to your specifications, brand voice, and target audience."
    },
    {
      question: "Can I customize the AI's writing style?",
      answer: "Absolutely! You can train our AI to match your unique brand voice by providing examples of your existing content. The AI will learn your tone, style, and preferences to maintain consistency across all generated content."
    },
    {
      question: "What types of content can the AI create?",
      answer: "Our AI can create a wide variety of content including blog posts, social media posts, marketing copy, product descriptions, email campaigns, press releases, and much more. We support over 50+ content templates for different use cases."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with access to all features and 10,000 AI words. No credit card required to start your trial. You can upgrade to a paid plan anytime during or after your trial period."
    },
    {
      question: "How accurate is the AI-generated content?",
      answer: "Our AI produces highly accurate, contextually relevant content with human-like quality. However, we always recommend reviewing and editing the generated content to ensure it perfectly matches your requirements and maintains your brand standards."
    },
    {
      question: "Can multiple team members collaborate?",
      answer: "Yes! Our Professional and Enterprise plans support team collaboration with features like real-time editing, comments, shared workspaces, brand guidelines, and user permission management to streamline your team's content creation workflow."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-effect rounded-xl border border-writeforge-dark-border px-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left text-white hover:text-writeforge-orange text-lg font-medium py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-writeforge-gray pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
