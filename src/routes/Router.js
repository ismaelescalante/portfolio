import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Layout from "./Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Landing />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ] 
    }
])