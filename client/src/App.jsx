import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Create from './Components/Ressource/Create';
import Read from './Components/Ressource/Read';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Update from './Components/Ressource/Update';
import Homedeux from './Components/Enfant/Homedeux';
import Createdeux from './Components/Enfant/Createdeux';
import Readdeux from './Components/Enfant/Readdeux';
import Updatedeux from './Components/Enfant/Updatedeux';
import Home from './Components/Ressource/Home';
import Createtrois from './Components/Employe/Createtrois';
import Updatetrois from './Components/Employe/Updatetrois';
import Hometrois from './Components/Employe/Hometrois';
import Createquatre from './Components/Parcours/Createquatre';
import Homequatre from './Components/Parcours/Homequatre';
import Createcinq from './Components/Antecedent/Createcinq';
import Homecinq from './Components/Antecedent/Homecinq';
import Createsix from './Components/Dons/Createsix';
import Homesix from './Components/Dons/Homesix';
import Createsept from './Components/Stock/Createsept';
import Homesept from './Components/Stock/Homesept';
import Createhuit from './Components/Allocation/Createhuit';
import Homehuit from './Components/Allocation/Homehuit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '/create',
    element: <div><Create /></div>
  },
  {
    path: '/read/:id',
    element: <div><Read /></div>
  },
  {
    path: '/edit/:id',
    element: <div><Update /></div>
  },
  {
    path: '/home',
    element: <div><Home /></div>
  },
  {
    path: '/createdeux',
    element: <div><Createdeux /></div>
  },
  {
    path: '/readdeux/:id',
    element: <div><Readdeux /></div>
  },
  {
    path: '/editdeux/:id',
    element: <div><Updatedeux /></div>
  },
  {
    path: '/homedeux',
    element: <div><Homedeux /></div>
  },
  {
    path: '/createtrois',
    element: <div><Createtrois /></div>
  },
  {
    path: '/edittrois/:id',
    element: <div><Updatetrois /></div>
  },
  {
    path: '/hometrois',
    element: <div><Hometrois /></div>
  },
  {
    path: '/createquatre',
    element: <div><Createquatre /></div>
  },
  {
    path: '/homequatre',
    element: <div><Homequatre /></div>
  },
  {
    path: '/createcinq',
    element: <div><Createcinq /></div>
  },
  {
    path: '/homecinq',
    element: <div><Homecinq /></div>
  },
  {
    path: '/createsix',
    element: <div><Createsix /></div>
  },
  {
    path: '/homesix',
    element: <div><Homesix /></div>
  },
  {
    path: '/createsept',
    element: <div><Createsept /></div>
  },
  {
    path: '/homesept',
    element: <div><Homesept /></div>
  },
  {
    path: '/createhuit',
    element: <div><Createhuit /></div>
  },
  {
    path: '/homehuit',
    element: <div><Homehuit /></div>
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
