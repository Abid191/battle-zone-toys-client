import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto font-lato">
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </div>
);
