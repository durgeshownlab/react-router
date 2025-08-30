import { Route, Routes, useLocation } from "react-router-dom";
import About from "../pages/About";
import Layout from "../components/Layout/Layout";
import PrivateRoutes from "./PrivateRoutes";
import { lazy, Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import CustomErrorBoundary from "../components/CustomErrorBoundary/CustomErrorBoundary";
import RecipeInfo from "../components/RecipeInfo/RecipeInfo";
import NotFound from "../pages/NotFound";

const Menu = lazy(()=> import("../pages/Menu"));
const Spicy = lazy(()=> import("../pages/Menu/Spicy"));
const QuickEasy = lazy(()=> import("../pages/Menu/QuickEasy"));
const FamilyFriendly = lazy(()=> import("../pages/Menu/FamilyFriendly"));
const Vegan = lazy(()=> import("../pages/Menu/Vegan"));
const InterContinental = lazy(()=> import("../pages/Menu/Intercontinental"));
const RecipeDetail = lazy(()=> import("../components/RecipeDetail/RecipeDetail"));

const Home = lazy(()=> import('../pages/Home'));
const Profile = lazy(()=> import('../pages/Profile'));
const Dashboard = lazy(()=> import('../pages/Dashboard'));
const Login = lazy(()=> import('../pages/Login'));

const AppRouter = () => {

  const location = useLocation()

  return (
    <CustomErrorBoundary >
      <Suspense fallback={<LoadingSpinner />} >
        <Layout>
          <Routes location={location}>
            <Route path="/" element={<Home />} />

            <Route path="login" element={<Login />} />
            <Route path="profile" element={<PrivateRoutes><Profile /></PrivateRoutes>} />

            <Route path="menu" element={<Menu />} >
              <Route path="spicy" element={<Spicy />}>
                <Route path=":recipeId" element={<RecipeDetail /> } />
              </Route>
              <Route path="quick-easy" element={<QuickEasy />} />
              <Route path="family-friendly" element={<FamilyFriendly />} />
              <Route path="vegan" element={<Vegan />}> 
                <Route path=":recipeId" element={<RecipeDetail />} />
              </Route>
              <Route path="intercontinental" element={<InterContinental />} >
                <Route path="recipe-info" element={<RecipeInfo />} />
              </Route>
            </Route>
            <Route path="dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
            <Route path="about" element={<About />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Suspense>
    </CustomErrorBoundary>
  );
};

export default AppRouter;
