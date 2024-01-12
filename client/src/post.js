import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="flex lg:flex-row flex-col justify-center lg:gap-40 gap-10 items-center my-20">
      <Link to={`/post/${_id}`} className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] overflow-hidden rounded-3xl">
        <img
          className="object-cover"
          src={"http://localhost:4000/" + cover}
          alt=""
        />
      </Link>

      <div className="w-[30%] text-white lg:text-left text-center capitalize">
        <Link to={`/post/${_id}`}>
          <h1 className="text-4xl font-semibold ">{title}</h1>
        </Link>
        <p>
          <a href="/">{author.username}</a>{" "}
          <time>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time>{" "}
        </p>
        <p className="text-md">{summary}</p>
      </div>
    </div>
  );
}
