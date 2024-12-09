import { useNavigate } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";

import s from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={s.header} onClick={() => navigate("/")}>
      <div className={s.logo}>Generator Password</div>
      <div className={s.rightContainer}>
        <div className={s.darkMode}>
          Light
          <MdLightMode size={20} color={"white"} />
        </div>
        <div className={s.login}>
          Login
          <RiLoginCircleLine size={20} color={"white"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
