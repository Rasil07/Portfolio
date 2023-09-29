import { addBaseRoute } from "../../utility/addBasePath";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <a href={addBaseRoute("/about")}>About</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
