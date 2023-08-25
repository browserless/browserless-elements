import React from 'react';
import useTheme from '../hooks/useTheme';
import { classNames } from '../utils';

const styles = {
  base:
    'fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  z-50 p-3',
  light: 'bg-white color-charcoal-800',
  dark: 'bg-charcoal-700 text-white',
};

const Modal = (props: ModalProps) => {
  const {
    title,
    children,
    onClose,
    closeOnBackdropClick = true,
    closeOnEsc = true,
    show = false,
    width = '500px',
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
    <div
      className={classNames('top-0 left-0 z-20', isActive ? 'fixed' : 'hidden')}
    >
      <div
        className={classNames(
          styles.base,
          colors,
          variant === 'round' && 'rounded-md',
          additionalClassName
        )}
        style={{ width }}
        {...otherProps}
      >
        <div className="p-5">{children}</div>
      </div>
      <div
        className="fixed z-40 w-screen h-screen bg-black/40"
        onClick={closeOnBackdropClick ? handleClose : undefined}
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
