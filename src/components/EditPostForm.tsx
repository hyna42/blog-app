import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type EditPostFormProps = {
  postData: { title: string; body: string };
  onClose: () => void;
};

const formSchema = z.object({
  titre: z.string().min(1, {
    message: "Le titre du post doit contenir au mois 10 caractères.",
  }),

  description: z.string().min(2, {
    message: "Le contenu du post doit contenir au mois 25 caractères",
  }),
});

const EditPostForm = ({ postData, onClose }: EditPostFormProps) => {
  // Initialisation du formulaire avec useForm
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titre: postData.title,
      description: postData.body,
    },
  });

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Données du formulaire:", data);
    onClose(); //fermer le modal après soumission
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="titre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input placeholder="titre du post" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="description du post" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-sky-800 hover:bg-amber-600">
          Sauvegarder
        </Button>
      </form>
    </Form>
  );
};

export default EditPostForm;
