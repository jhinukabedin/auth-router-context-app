import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Forget from './components/Forget';
import Orders from './components/Orders';
import PrivateRouter from './router/PrivateRouter';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/orders',
          element: <PrivateRouter><Orders></Orders></PrivateRouter>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/forget-password',
          element:<Forget></Forget>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
