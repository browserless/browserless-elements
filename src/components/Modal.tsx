import React from "react";

import useTheme from "../hooks/useTheme";
import { classNames } from "../utils";

import Heading from "./Heading";

const styles = {
  base: "fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 !z-[41] p-3 !max-w-[90vw] !max-h-[90vh] overflow-scroll",
  light: "bg-white color-charcoal-800",
  dark: "bg-charcoal-700 text-white",
};

const Modal = (props: ModalProps) => {
  const {
    title,
    children,
    onClose,
    closeOnBackdropClick = true,
    closeOnEsc = true,
    show = false,
    width = "500px",
    className: additionalClassName,
    ...otherProps
  } = props;

  const [isActive, setActive] = React.useState(show);
  const { theme, variant } = useTheme();
  const colors = styles[theme];

  React.useEffect(() => {
    setActive(show);
  }, [show]);

  const handleClose = () => {
    setActive(!show);
    onClose && onClose();
  };

  return (
    <div className={classNames("top-0 left-0 z-30", isActive ? "fixed" : "hidden")}>
      <div
        className={classNames(
          colors,
          variant === "round" && "rounded-md",
          additionalClassName,
          styles.base,
        )}
        style={{ width }}
        {...otherProps}
      >
        {title && <Heading size="md">Modal</Heading>}
        <div className="p-5">{children}</div>
      </div>
      <div
        className="fixed z-40 w-screen h-screen bg-black/40"
        onClick={closeOnBackdropClick ? handleClose : undefined}
        onKeyUp={(event) => {
          if (event.key === "Escape" && !closeOnEsc) onClose();
        }}
      ></div>
    </div>
  );
};

export default Modal;
export interface ModalProps extends Omit<React.HTMLProps<HTMLDivElement>, "width"> {
  show?: boolean;
  onClose: Function;
  closeOnBackdropClick?: boolean;
  closeOnEsc?: boolean;
  width?: string;
}
