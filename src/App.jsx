import FirstPage from "./pages/firstPage";
import SecondPage from "./pages/secondPage";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />
  },
  {
    path: "/projects",
    element: <SecondPage />
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
      <Footer />
      <Footer />
    </div>
  );
};

export default App;
