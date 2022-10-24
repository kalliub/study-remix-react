import type { ReactElement } from 'react';

interface IMouseHoverWrapper {
  children: ReactElement | ReactElement[];
  onHover: (isMouseHover: boolean) => void;
}

const MouseHoverWrapper = ({ children, onHover }: IMouseHoverWrapper) => {
  return (
    <div onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
      {children}
    </div>
  );
};

export default MouseHoverWrapper;
