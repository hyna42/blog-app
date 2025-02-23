import Alert from "@/components/Alert";
import PostCard from "@/components/Card";
import Spinner from "@/components/Spinner";
import { useFetch } from "@/hooks/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  console.log("data", data, loading, error);

  return (
    <>
      {loading && <Spinner />}
      {error && <Alert message={error.message} />}
      {data && (
        <div className="flex flex-wrap justify-center gap-3 p-3">
          {/* <h1>Mon Blog</h1> */}
          {data.map((post) => (
            <PostCard
              key={post.id}
              image={`https://picsum.photos/id/${post.id}/280/180`}
              title={post.title}
              description={post.body}
              href={`post/${post.id}`}
              buttonLabel="Voir l'article"
              fullWidth={false} // 🔹 Cartes normales (max 350px)
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
