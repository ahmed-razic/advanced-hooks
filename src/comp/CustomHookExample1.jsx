import useFetch from '../hooks/useFetch';

function CustomHookExample1() {
  const { loading, data, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );

  if (loading) return <h3>Loading...</h3>;

  return (
    <div>
      {data.map((post) => (
        <div>
          <h3 key={post.id}>
            Post {post.id}: {post.title}
          </h3>
          <br />
        </div>
      ))}
    </div>
  );
}
export default CustomHookExample1;
