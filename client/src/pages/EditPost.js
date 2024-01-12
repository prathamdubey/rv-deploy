import { useState, useEffect } from "react";

import "react-quill/dist/quill.snow.css";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../Editor";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      });
    });
  }, []);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    const response = await fetch("http://localhost:4000/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    <>
      <form
        action=""
        className="p-10 flex flex-col justify-center items-center min-h-screen gap-10 m-20 bg-slate-700 rounded-xl text-white "
        onSubmit={updatePost}
      >
        <div className="flex flex-col gap-2 w-[70%]">
          <label className="mx-4 font-medium text-3xl font-sans" htmlFor="">
            Title
          </label>
          <input
            className="p-5 rounded-2xl text-white  bg-slate-500 appearance-none border-none outline-none"
            type="title"
            placeholder={"Title"}
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <label className="mx-4 font-medium text-3xl font-sans" htmlFor="">
            Summary
          </label>
          <textarea
            className="p-5 pb-20 rounded-2xl text-white  bg-slate-500 appearance-none border-none outline-none"
            type="summary"
            placeholder={"Summary"}
            value={summary}
            onChange={(ev) => setSummary(ev.target.value)}
          />
        </div>
        <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
        <div className="bg-white text-black m-5">
          <Editor onChange={setContent} value={content} />
        </div>
        <button className="bg-blue-500 text-slate-200 text-xl hover:bg-white hover:text-blue-500 font-semibold transition-all hover:delay-100 px-20 py-4 rounded-full">Edit Post</button>
      </form>
    </>
  );
}
