"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Guilherme Almeida",
    userName: "Médico Patologista",
    comment:
      "Tive o prazer de ter a Illumine como parceira em um projeto e fiquei muito satisfeito com o resultado. Recomendo!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Alexandre Lemos",
    userName: "Dono da VamboraTur",
    comment:
      "Contratei os serviços da Illumine para criar o site da VamboraTur faz 5 anos e até hoje conto com o suporte deles. Recomendo!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Guilherme Almeida",
    userName: "Médico Patologista",
    comment:
      "Tive o prazer de ter a Illumine como parceira em um projeto e fiquei muito satisfeito com o resultado. Recomendo!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Alexandre Lemos",
    userName: "Dono da VamboraTur",
    comment:
      "Contratei os serviços da Illumine para criar o site da VamboraTur faz 5 anos e até hoje conto com o suporte deles. Recomendo!",
    rating: 5.0,
  }
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Depoimentos
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          O que nossos clientes dizem
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
