const NotFound = () => {
  return (
    <>
      <h1>Page introuvable</h1>
      <p>La page demandée {location.hash} n'existe pas</p>
    </>
  );
};

export default NotFound;
