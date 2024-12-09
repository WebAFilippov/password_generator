import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../../redux/slices/SliderValues";
import * as Slider from "@radix-ui/react-slider";

import s from "./SliderValue.module.scss";

interface ISlider {
  slider: {
    value: number[];
  };
}

const SliderValue = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: ISlider) => state.slider.value);

  return (
    <form>
      <Slider.Root
        className={s.SliderRoot}
        defaultValue={value}
        max={20}
        step={1}
        value={value}
        onValueChange={(value) => {
          dispatch(changeValue(value));
        }}
      >
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.SliderThumb} aria-label="Volume" />
      </Slider.Root>
    </form>
  );
};

export default SliderValue;
