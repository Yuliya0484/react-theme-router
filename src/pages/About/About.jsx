import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi est vel
        laborum eaque iure quaerat accusamus voluptatum hic, odit possimus
        mollitia autem qui recusandae enim tempora quasi. Sequi, cupiditate
        vitae!
      </p>
      <nav>
        <NavLink to="aim">Aim</NavLink>
        <NavLink to="company">Company</NavLink>
        <NavLink to="team">Team</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default About;
