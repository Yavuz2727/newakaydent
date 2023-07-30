import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AgızVeCene,
  AnaSayfa,
  Bılgı,
  CocukDıs,
  DısImplant,
  Galerı,
  Hakkımızda,
  HomePage,
  Iletısım,
  KanalTedavı,
  OnleyıcıDısHekımlıgı,
  Ortodontı,
  PerıOdental,
  ProtetıkDısTedavısı,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <AnaSayfa />,
      },
      { path: "Hakkımızda", element: <Hakkımızda /> },
      {
        path: "DısImplant",
        element: <DısImplant />,
      },
      {
        path: "Galerı",
        element: <Galerı />,
      },
      {
        path: "Bılgı",
        element: <Bılgı />,
      },

      {
        path: "Iletısım",
        element: <Iletısım />,
      },
      {
        path: "KanalTedavı",
        element: <KanalTedavı />,
      },
      {
        path: "OnleyıcıDısHekımlıgı",
        element: <OnleyıcıDısHekımlıgı />,
      },
      {
        path: "Ortodontı",
        element: <Ortodontı />,
      },
      {
        path: "PerıOdental",
        element: <PerıOdental />,
      },
      {
        path: "ProtetıkDısTedavısı",
        element: <ProtetıkDısTedavısı />,
      },
      {
        path: "AgızveCene",
        element: <AgızVeCene />,
      },
      {
        path: "CocukDıs",
        element: <CocukDıs />,
      },
    ],
  },
]);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
