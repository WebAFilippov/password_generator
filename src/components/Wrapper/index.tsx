import { Outlet } from "react-router-dom";

import s from "./Wrapper.module.scss";
import Header from "../Header";
import Footer from "../Footer";

const Wrapper = () => {
  return (
    <>
      <div className={s.application}>
        <div className={s.header}>
          <Header />
        </div>
        <div className={s.main}>
          <Outlet />
        </div>
        <div className={s.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
