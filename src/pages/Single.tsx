import Alert from "@/components/Alert";
import PostCard from "@/components/Card";
import Spinner from "@/components/Spinner";
import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Single = () => {
  const { id } = useParams<{ id: string }>();
  const [urlImg, setUrlImg] = useState<string>("");

  const { data, loading, error } = useFetch(
    id ? `https://jsonplaceholder.typicode.com/posts?id=${id}` : ""
  );

  useEffect(() => {
    if (id) {
      setUrlImg(`https://picsum.photos/id/${id}/800/600`);
    }
  }, [id]);

  return (
    <>
      {loading && <Spinner />}
      {error && <Alert message={error.message} />}
      {data &&
        urlImg &&
        data.map((post) => (
          <div className="flex justify-center p-10 flex-col">
            <PostCard
              key={post.id}
              title={post.title}
              image={urlImg}
              description={post.body}
              fullWidth={true} // cartes grand 800px
              buttonLabel="Modifier l'article"
            />

            <Link to={`/post/${Number(id) + 1}`}className="pt-3">Article suivant ... </Link>
          </div>
        ))}
    </>
  );
};

export default Single;
