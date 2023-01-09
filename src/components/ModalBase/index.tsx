import { ReactNode, useEffect, useRef } from "react";
import { StyledModalBox, StyledModalContainer } from "./style";

export interface iModal {
  children: ReactNode;
  setIs: (arg0: boolean) => void;
  width?: string;
  heigth?: string;
  justifyContent?: string;
  alignItems?: string;
  justifyContentModal?: string;
  alignItemsModal?: string;
}

export interface IEvent {
  type: string;
  target: HTMLDivElement | any;
}

const ModalBase = ({
  children,
  setIs,
  width,
  heigth,
  justifyContent,
  alignItems,
}: iModal) => {
  const modalRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    function handleOutClick(event: any) {
      if (!modalRef.current?.contains(event.target)) {
        setIs(false);
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [setIs]);

  return (
    <StyledModalContainer
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      <StyledModalBox ref={modalRef} width={width} heigth={heigth}>
        {children}
      </StyledModalBox>
    </StyledModalContainer>
  );
};

export default ModalBase;
