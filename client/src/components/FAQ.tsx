import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: '1',
    question: 'How accurate is the breed identification?',
    answer: 'Our AI model has been trained on thousands of dog images and achieves high accuracy rates. However, mixed breeds or dogs with unique characteristics may show varied results.',
  },
  {
    id: '2',
    question: 'What kind of photos work best?',
    answer: 'Clear, well-lit photos of your dog from the side or front work best. Make sure the dog is the main subject of the photo and avoid heavily filtered images.',
  },
  {
    id: '3',
    question: 'Is my data and my dog\'s photo safe?',
    answer: 'Yes! We take your privacy seriously. Photos are processed securely and are not stored on our servers after analysis.',
  },
  {
    id: '4',
    question: 'Can it identify mixed breed dogs?',
    answer: 'The AI will identify the most prominent breed characteristics in your dog. For mixed breeds, it typically identifies the dominant breed in the mix.',
  },
  {
    id: '5',
    question: 'Is this service really free?',
    answer: 'Yes! WoofWise is completely free to use. Simply upload a photo and get instant breed identification results.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We've got answers. Check out what people often ask.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full" data-testid="accordion-faq">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} data-testid={`accordion-item-${faq.id}`}>
              <AccordionTrigger className="text-left text-foreground" data-testid={`accordion-trigger-${faq.id}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid={`accordion-content-${faq.id}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
