
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import Navigation from '@/components/Navigation';
  import Footer from '@/components/Footer';
  import { motion } from "framer-motion";
  
  const FAQPage = () => {
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
      },
      {
        question: "What are the pricing plans?",
        answer: "We offer flexible pricing plans to suit different needs: Starter plan at $19/month for individuals, Professional plan at $49/month for small teams, and Enterprise plan with custom pricing for large organizations. All plans include different word limits and features."
      },
      {
        question: "Is my data secure?",
        answer: "Yes, we take data security very seriously. All your content is encrypted both in transit and at rest. We use industry-standard security measures including SSL encryption, regular security audits, and compliance with GDPR and other data protection regulations."
      },
      {
        question: "Can I integrate with other tools?",
        answer: "Absolutely! We offer integrations with popular tools like WordPress, Shopify, HubSpot, Slack, and many more. Our API also allows for custom integrations with your existing workflow and content management systems."
      },
      {
        question: "What languages does the AI support?",
        answer: "Our AI supports content generation in over 25 languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese, Japanese, and many more. The quality may vary slightly between languages."
      },
      {
        question: "How do I get started?",
        answer: "Getting started is easy! Simply sign up for a free account, choose your plan, and start creating content immediately. Our onboarding process includes tutorials and templates to help you get the most out of our platform from day one."
      },
      {
        question: "Do you offer customer support?",
        answer: "Yes! We provide 24/7 customer support through chat, email, and phone. Our Professional and Enterprise plans also include priority support and dedicated account managers to help you succeed with your content strategy."
      }
    ];
  
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="flex-1 pt-32 pb-20 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6">
            {/* Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl text-writeforge-gray max-w-2xl mx-auto">
                Find answers to common questions about our AI content generation platform and how it can help transform your content strategy.
              </p>
            </motion.div>
  
            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="glass-effect rounded-xl border border-writeforge-dark-border px-6 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-blue-400 text-lg font-medium py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-writeforge-gray pb-6 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
  
            {/* Contact Support Section */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="glass-effect rounded-xl border border-writeforge-dark-border p-8 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Still have questions?
                </h3>
                <p className="text-writeforge-gray mb-6">
                  Can't find the answer you're looking for? Our support team is here to help you succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover-glow">
                    Contact Support
                  </button>
                  <button className="border border-writeforge-dark-border hover:border-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Live Chat
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
  
        <Footer />
      </div>
    );
  };
  
  export default FAQPage;
