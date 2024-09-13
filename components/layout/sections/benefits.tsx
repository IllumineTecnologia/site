import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Lightbulb", // Usando um ícone que remete a ideia de iluminação e inovação
    title: "Tecnologia Inovadora",
    description:
      "Utilizamos as tecnologias mais recentes para criar soluções que atendem às necessidades atuais e futuras do seu negócio.",
  },
  {
    icon: "Rocket", // Ícone que simboliza crescimento e sucesso
    title: "Impulsione Seu Negócio",
    description:
      "Nossas soluções são projetadas para acelerar o crescimento e maximizar o impacto digital da sua empresa.",
  },
  {
    icon: "Shield", // Ícone representando segurança
    title: "Segurança e Confiabilidade",
    description:
      "Garantimos que suas informações e operações estejam seguras com nossas soluções de alta confiabilidade.",
  },
  {
    icon: "Handshake", // Ícone representando parceria e suporte
    title: "Suporte Dedicado",
    description:
      "Nosso time está sempre à disposição para oferecer suporte e garantir que seus projetos alcancem o sucesso desejado.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Diferenciais</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a <span className="text-primary">Illumine</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Nossos diferenciais são o que nos tornam únicos e nos permitem oferecer as melhores soluções
            para o seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
