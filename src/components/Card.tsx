import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

type Cardprops = {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
  buttonLabel?: string;
};

const PostCard = ({
  image,
  title,
  description,
  href,
  buttonLabel,
}: Cardprops) => {
  console.log(image, title, description, href, buttonLabel);
  return (
    <Card className="w-[350px] mb-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={image} />
        {/* <p>Card Content</p> */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">{buttonLabel}</Button>
      </CardFooter>
    </Card>
  );
};
export default PostCard;
