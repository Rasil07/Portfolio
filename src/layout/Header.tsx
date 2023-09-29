// import { useNavigate } from "react-router-dom";

const Header = () => {
  //   const navigate = useNavigate();

  return (
    <div className="px-10 py-5 ">
      <header className="flex space-x-6">
        <p>Rasil</p>
        <ul className="flex space-x-6">
          <li>
            <a href="/">Work Experience</a>
          </li>
          <li>
            <a href="#/about">Articles</a>
          </li>
          <li>
            <a href="#/about">Skills</a>
          </li>
          <li>
            <a href="#/about">About</a>
          </li>
          <li>
            <a href="#/contact">Contact</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
