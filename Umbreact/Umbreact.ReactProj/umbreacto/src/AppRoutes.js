import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { NormalPage } from "./components/NormalPage";

const AppRoutes = [
  {
    index: true,
    element: <NormalPage />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
