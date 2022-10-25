import type { ReactElement } from 'react';

interface IMouseEventWrapper {
  children: ReactElement | ReactElement[];
  onHover: (isMouseHover: boolean) => void;
}

const MouseEventWrapper = ({ children, onHover }: IMouseEventWrapper) => {
  return (
    <div onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
      {children}
    </div>
  );
};

export default MouseEventWrapper;
