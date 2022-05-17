import useApiData from '../hooks/useApiData';
function CustomHookExample2() {
  const { data, error, loading } = useApiData(
    'https://api.github.com/users',
    {}
  );

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error.message}</h3>;

  return (
    <div>
      {data.map((user) => (
        <p key={user.id}>User Login: {user.login}</p>
      ))}
    </div>
  );
}
export default CustomHookExample2;
