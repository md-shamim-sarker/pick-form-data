import {createBrowserRouter} from "react-router-dom";
import FormBuilder from "../components/FormBuilder";
import OnSubmit from "../components/OnSubmit";
import ReactHookForm from "../components/ReactHookForm";
import UseRef from "../components/UseRef";
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <OnSubmit></OnSubmit>
            },
            {
                path: "/useRef",
                element: <UseRef></UseRef>
            },
            {
                path: "/reactHookForm",
                element: <ReactHookForm></ReactHookForm>
            },
            {
                path: "/formBuilder",
                element: <FormBuilder></FormBuilder>
            }
        ]
    }
]);

export default router;