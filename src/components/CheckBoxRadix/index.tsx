import { useDispatch, useSelector } from "react-redux";
import * as Checkbox from "@radix-ui/react-checkbox";
import { BsCheck } from "react-icons/bs";

import s from "./CheckBoxRadix.module.scss";

import { toggleCheckbox } from "../../redux/slices/CheckBoxSlice";

interface IProps {
  title: string;
  id: string;
}

interface ICheckbox {
  checkbox: {
    cb1: boolean;
    cb2: boolean;
    cb3: boolean;
    cb4: boolean;
  };
}

const CheckBoxRadix = ({ title, id }: IProps) => {
  const dispatch = useDispatch();
  const checkboxs = useSelector((state: ICheckbox) => state.checkbox);

  let checkbox;

  if (id === "cb1") checkbox = checkboxs.cb1;
  if (id === "cb2") checkbox = checkboxs.cb2;
  if (id === "cb3") checkbox = checkboxs.cb3;
  if (id === "cb4") checkbox = checkboxs.cb4;

  return (
    <form className={s.Checkbox}>
      <Checkbox.Root
        className={s.CheckboxRoot}
        id={id}
        checked={checkbox}
        onCheckedChange={() => dispatch(toggleCheckbox(id))}
      >
        <Checkbox.Indicator className={s.CheckboxIndicator}>
          <BsCheck />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={s.Label} htmlFor={id}>
        {title}
      </label>
    </form>
  );
};

export default CheckBoxRadix;
