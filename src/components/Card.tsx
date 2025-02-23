import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Button } from "./ui/button";
import { Link } from "react-router-dom";
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
    <Card className="w-[350px] flex flex-col overflow-hidden border shadow-md">
      <CardHeader>
        <CardTitle className="truncate">{title}</CardTitle>
        <CardDescription className="line-clamp-2 md:line-clamp-none">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <img
          src={image}
          className="w-full h-40 object-cover rounded-sm"
          alt="Post"
        />
        <p className="text-sm line-clamp-2">Card Content</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link to={href ? href : "#"} className="w-full">
          <Button className="w-full bg-sky-800 hover:bg-amber-600 text-white">
            {buttonLabel}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default PostCard;
