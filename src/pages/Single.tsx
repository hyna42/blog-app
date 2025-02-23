import { useParams } from "react-router";

const Single = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h1>ID du post == {id}</h1>
    </>
  );
};

export default Single;
