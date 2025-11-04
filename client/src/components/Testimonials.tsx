import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jessica L.',
    rating: 5,
    text: "I've always wondered what breed my rescue dog was. WoofWise identified her as a Border Collie mix in seconds! So cool and accurate.",
    initials: 'JL',
  },
  {
    id: 2,
    name: 'Michael R.',
    rating: 5,
    text: "Loved using WoofWise! It nailed my pup's breed on the first try. The accuracy was unreal. Now I know my furry friend is part Beagle!",
    initials: 'MR',
  },
  {
    id: 3,
    name: 'Samantha P.',
    rating: 5,
    text: "This tool is amazing! I uploaded a photo of my dog, and it told me she's a Golden Retriever. The results came back super fast!",
    initials: 'SP',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">Hear From Our Happy Users</h2>
          <p className="text-lg text-muted-foreground">
            See what dog lovers are saying about their experience with WoofWise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover-elevate transition-all"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar data-testid={`avatar-${testimonial.id}`}>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground" data-testid={`text-name-${testimonial.id}`}>
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-1" data-testid={`rating-${testimonial.id}`}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground" data-testid={`text-review-${testimonial.id}`}>
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
