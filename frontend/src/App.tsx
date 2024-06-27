import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
     <Header />
      <Outlet />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
