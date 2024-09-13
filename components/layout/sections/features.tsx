import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    title: "Criação de Sites",
    icon: "Monitor",
    description:
      "Desenvolvemos sites responsivos e otimizados para garantir a melhor experiência para seus usuários.",
  },
  {
    title: "Aplicações Web",
    icon: "Code",
    description:
      "Criamos aplicações web personalizadas para atender às necessidades específicas do seu negócio.",
  },
  {
    title: "Consultoria em TI",
    icon: "Briefcase",
    description:
      "Oferecemos consultoria especializada em tecnologia da informação para ajudar a impulsionar o seu negócio.",
  },
  {
    title: "Hospedagem em Sites",
    icon: "Cloud",
    description:
      "Hospedamos seu site ou aplicação em servidores de alta performance e segurança na nuvem.",
  },
  {
    title: "Emails Profissionais",
    icon: "Mail",
    description:
      "Crie emails profissionais personalizados para sua empresa e melhore a comunicação com seus clientes.",
  },
  {
    title: "Otimização de SEO",
    icon: "Search",
    description:
      "Aumente a visibilidade do seu site nos mecanismos de busca com nossos serviços de otimização de SEO.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Serviços
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Conheça nossos serviços
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Saiba mais sobre os serviços que oferecemos e como podemos ajudar a impulsionar o seu negócio.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
