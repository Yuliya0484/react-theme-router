import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Aim from "./components/NestedRouted/Aim";
import Company from "./components/NestedRouted/Company";
import Team from "./components/NestedRouted/Team";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route path="aim" element={<Aim />} />
          <Route path="team" element={<Team />} />
          <Route path="company" element={<Company />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
