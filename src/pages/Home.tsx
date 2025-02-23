import Alert from "@/components/Alert";
import PostCard from "@/components/Card";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useFetch";
import {Link } from "react-router-dom";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  console.log("data", data, loading, error);

  return (
    <>
       <h1 className="w-full text-center text-3xl font-bold my-4">Mon Blog</h1>
      {loading && <Spinner />}
      {error && <Alert message={error.message} />}
      {data && (
        <div className="flex flex-wrap justify-center gap-3 p-3">
         
        
          {data.map((post) => (
            <div className="mb-4" key={post.id}>
              <PostCard
                
                image={`https://picsum.photos/id/${post.id}/280/180`}
                title={post.title}
                description={post.body}
                href={`post/${post.id}`}
                buttonLabel="Voir l'article"
                fullWidth={false} // 🔹 Cartes normales (max 350px)
              />
              <Link to={`post/${post.id} `}>
                <Button className="w-full bg-sky-800 hover:bg-amber-600 text-white mt-1">
                  Voir l'annonce
                </Button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
