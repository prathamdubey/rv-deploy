import "./App.css";
// import Post from "./post";
// import Header from "./header";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import Home from "./Home";

function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        
        
        <Route
          path={"/register"}
          element={
            <RegisterPage />
          }
        />
        <Route path="/create" element={<CreatePost />} />
        
        <Route path="/edit/:id" element={<EditPost />} />
      </Route>
      <Route
          path={"/login"}
          element={
            <LoginPage />
          }
        />
        <Route path="/post/:id" element={<PostPage />} />
      <Route path='/blog' element={<IndexPage />} />
    </Routes>
    </UserContextProvider>
  );
}

export default App;
