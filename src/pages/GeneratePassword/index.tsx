import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";

import s from "./GeneratePassword.module.scss";

import generatePassword from "./../../utils/generatePassword/generatePassword";
import ToastCopied from "../../components/ToastCopied";
import SliderValue from "../../components/SliderValue";
import CheckBoxRadix from "../../components/CheckBoxRadix";
import LevelBlock from "../../components/LevelBlock";

interface ISlider {
  slider: {
    value: number[];
  };
}

interface ICheckbox {
  checkbox: {
    cb1: boolean;
    cb2: boolean;
    cb3: boolean;
    cb4: boolean;
  };
}

const GeneratePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const value = useSelector((state: ISlider) => state.slider.value);
  const checkbox = useSelector((state: ICheckbox) => state.checkbox);

  return (
    <div className={s.content}>
      <div className={s.tabsContainer}>
        <div onClick={() => navigate("/")}>Password Generator</div>
        <div onClick={() => navigate("/save")}>Saved Password</div>
      </div>
      <ToastCopied>
        <div className={s.passwordContainer}>
          <div className={s.password}>{password}</div>
          <div className={s.copyIcon}>
            <FaRegCopy size={25} />
          </div>
        </div>
      </ToastCopied>
      <div className={s.optionContainer}>
        <div className={s.lenghtContainer}>
          <div className={s.lengthCharacter}>Character Lenght</div>
          <div className={s.lenght}>{value[0]}</div>
        </div>
        <div className={s.slider}>
          <SliderValue />
        </div>
        <div className={s.optionsCheckbox}>
          <CheckBoxRadix title="Uppercase Letters" id="cb1" />
          <CheckBoxRadix title="Lowercase Letters" id="cb2" />
          <CheckBoxRadix title="Numbers" id="cb3" />
          <CheckBoxRadix title="Symbols" id="cb4" />
        </div>
        <div className={s.strengthContainer}>
          <div className={s.strenght}>Strength</div>
          <div className={s.complexityContainer}>
            <div className={s.complexity}>Medium</div>
            <div className={s.blockGroup}>
              {[...new Array(4)].map((_, index) => (
                <div className={s.level} key={index}>
                  <LevelBlock />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={s.buttonContainer}
          onClick={() => {
            setPassword(generatePassword({ lenght: value[0], checkbox }));
          }}
        >
          <div className={s.button}>GENERATE</div>
          <div className={s.arrow}>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePassword;
