"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone, SendIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const messageSubjects: string[] = [
  "Criação de Site",
  "Desenvolvimento de Sistema",
  "Consultoria em TI",
  "Hospedagem E-mail/Sites",
  "Outros",
];

const formSchema = z.object({
  name: z.string().min(2).max(255),
  whatsapp: z.string().min(11).max(15),
  email: z.string().email(),
  subject: z.string().refine((value) => messageSubjects.includes(value)),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      subject: "Criação de Site",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, whatsapp, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:ola@illumine.dev?subject=${subject}&body=Olá eu sou ${name}, meu e-mail é ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contato
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold">Vamos conversar?</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Quer tirar suas ideias do papel e transformá-las em projetos de
            sucesso? Entre em contato conosco para saber mais sobre como podemos
            ajudar a impulsionar o seu negócio.
          </p>

          <div className="flex flex-col gap-8">
            <div>
              <div className="flex gap-2 mb-1">
                <Phone />
                <div className="font-bold">Whatsapp</div>
              </div>

              <div>(85) 9.8623-1111</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Mail />
                <div className="font-bold">E-mail</div>
              </div>

              <div>ola@illumine.dev</div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Como devo te chamar?</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Digite o seu nome aqui"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Whatsapp</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="(85) 9.9999-9999"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="ola@illumine.dev"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um assunto" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {messageSubjects.map((subject, i) => (
                              <SelectItem value={subject} key={i}>
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Como posso te ajudar?</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Me informa sobre o seu projeto e como posso te ajudar."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="mt-4">
                  Enviar mensagem
                  <SendIcon className="ml-2" />
                  </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
