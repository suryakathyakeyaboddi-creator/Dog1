import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import goldenRetrieverImg from '@assets/generated_images/golden_retriever_running_field_0befd5f8.png';
import forestImg from '@assets/generated_images/misty_forest_dog_trail_f13c59c5.png';
import cuddlingImg from '@assets/generated_images/person_cuddling_puppy_warmly_42aba93d.png';

const articles = [
  {
    id: 1,
    image: goldenRetrieverImg,
    title: 'Understanding Your Golden Retriever',
    description: 'Golden retrievers are friendly and intelligent dogs. Learn about their temperament and care needs.',
    author: 'Sarah Jones',
  },
  {
    id: 2,
    image: forestImg,
    title: 'The Ultimate Guide to Small Dog Breeds',
    description: 'Looking for a pint-sized pal? Discover the world of small dog breeds and find your perfect match.',
    author: 'Mike Thompson',
  },
  {
    id: 3,
    image: cuddlingImg,
    title: "Decoding Dog Behavior: What Is Your Pet Saying?",
    description: 'Is your pup wagging their tail? Understand key body language cues and what they really mean.',
    author: 'Emma Wilson',
  },
];

export default function PawsPonder() {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">Paws & Ponder</h2>
          <p className="text-lg text-muted-foreground">
            Dog-lover articles, tips, and stories from the world of dogs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden hover-elevate transition-all"
              data-testid={`card-article-${article.id}`}
            >
              <CardHeader className="p-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover"
                  data-testid={`img-article-${article.id}`}
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-title-${article.id}`}>
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3" data-testid={`text-description-${article.id}`}>
                  {article.description}
                </p>
                <p className="text-xs text-muted-foreground" data-testid={`text-author-${article.id}`}>
                  {article.author}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="ghost" className="gap-2 px-0" data-testid={`button-read-more-${article.id}`}>
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
