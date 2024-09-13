import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center gap-3">
                <RocketIcon size={48} />
                <div>
                  Está pronto para
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    lançar o seu projeto?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Entre em contato com a gente para saber mais sobre nossos serviços
              e como podemos te ajudar.
            </CardContent>

            <CardFooter>
              <Button asChild color="primary">
                <Link href="#contact" className="text-base px-2">
                  Entre em contato! 🚀
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
