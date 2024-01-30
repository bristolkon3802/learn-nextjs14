type Params = {
  id: string;
};
type SearchParams = {};
interface IMovieProps {
  params: Params;
  searchParams: SearchParams;
}
export default function MovieDetailMovieDetail({
  params: { id },
  searchParams,
}: IMovieProps) {
  console.log(id);
  return <h1>Movie {id}</h1>;
}
