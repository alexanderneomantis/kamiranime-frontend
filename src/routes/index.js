import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import MainLayout from "../layouts/main";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
// guards
// components
import LoadingScreen from "../components/LoadingScreen";



const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "coming-soon", element: <ComingSoon /> },
        { path: "maintenance", element: <Maintenance /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {path: '', element: <Home />},
        {path: 'carrito', element: <Cart />},
        {path: 'contactanos', element: <ContactUs />},
        {path: 'preguntas-frecuentes', element: <Questions />},
      ]
    },
    {
      path: 'peluches',
      element: <MainLayout />,
      children: [
        {path: '', element: <Peluches />},
        {path: ':slug', element: <PelucheDetail />},
      ]
    },
    {
      path: 'figuras',
      element: <MainLayout />,
      children: [
        {path: '', element: <Figuras />},
        {path: ':slug', element: <FiguraDetail />},
      ]
    },
    {
      path: 'accesorios',
      element: <MainLayout />,
      children: [
        {path: '', element: <Accesorios />},
        {path: ':slug', element: <AccesorioDetail />},
      ]
    },
    {
      path: 'lamparas',
      element: <MainLayout />,
      children: [
        {path: '', element: <Lampara />},
        {path: ':slug', element: <LamparaDetail />},
      ]
    },
    {
      path: 'acrilicos',
      element: <MainLayout />,
      children: [
        {path: '', element: <Acrilicos />},
        {path: ':slug', element: <AcrilicoDetail />},
      ]
    },
  ])
}

const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const NotFound = Loadable(lazy(() => import('../pages/NotFound')));

const Home = Loadable(lazy(() => import('../pages/Home')));
const Questions = Loadable(lazy(() => import('../pages/Questions')));
const Cart = Loadable(lazy(() => import('../pages/Cart')));
const Peluches = Loadable(lazy(() => import('../pages/peluches')));
const PelucheDetail = Loadable(lazy(() => import('../pages/peluches/Detail')));
const Acrilicos = Loadable(lazy(() => import('../pages/acrilicos')));
const AcrilicoDetail = Loadable(lazy(() => import('../pages/acrilicos/Detail')));
const Accesorios = Loadable(lazy(() => import('../pages/accesorios')));
const AccesorioDetail = Loadable(lazy(() => import('../pages/accesorios/Detail')));
const Figuras = Loadable(lazy(() => import('../pages/figuras')));
const FiguraDetail = Loadable(lazy(() => import('../pages/figuras/Detail')));
const Lampara = Loadable(lazy(() => import('../pages/lamparas')));
const LamparaDetail = Loadable(lazy(() => import('../pages/lamparas/Detail')));
const ContactUs = Loadable(lazy(() => import('../pages/ContactUs')));


