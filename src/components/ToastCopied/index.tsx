import { useEffect, useState, useRef, PropsWithChildren } from "react";
import * as Toast from "@radix-ui/react-toast";

import s from "./ToastCopied.module.scss";

const ToastCopied: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const timerRef = useRef<number>(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="right" duration={3000}>
      <div
        className={s.triggerToast}
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 150);
        }}
      >
        {children}
      </div>

      <Toast.Root className={s.ToastRoot} open={open} onOpenChange={setOpen}>
        <Toast.Title className={s.ToastTitle}>Password Copied</Toast.Title>
        <Toast.Description className={s.ToastDescription}>
          QWERTYqwerty
        </Toast.Description>
      </Toast.Root>

      <Toast.Viewport className={s.ToastViewport} />
    </Toast.Provider>
  );
};

export default ToastCopied;
