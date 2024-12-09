import { useNavigate } from "react-router-dom";

import s from "./NotFound404.module.scss";

const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <div className={s.content}>
      <div className={s.header}>
        <div className={s.label404}>404</div>
        <div className={s.labelNotFound}>Not Found</div>
      </div>
      <div className={s.footer}>
        <button className={s.button} onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default NotFound404;
