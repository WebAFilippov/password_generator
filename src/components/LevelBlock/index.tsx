import cn from "classnames/bind";

import scss from "./LevelBlock.module.scss";

const cx = cn.bind(scss);

const LevelBlock = () => {
  return <span className={cx("block", { "paint": false })}></span>;
};

export default LevelBlock;
