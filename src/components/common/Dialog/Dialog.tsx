import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const inactivateScroll = () => {
  document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
};

const activateScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.cssText = '';
  window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
};

export interface DialogProps {
  title: string;
  LeftButton: ReactNode;
  RightButton: ReactNode;
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
}

export const Dialog = ({
  title,
  LeftButton,
  RightButton,
  showDialog,
  setShowDialog,
}: DialogProps) => {
  const closeDialog = () => {
    setShowDialog(false);
    activateScroll();
  };

  useEffect(() => {
    inactivateScroll();
    return () => activateScroll();
  }, []);

  return createPortal(
    <>
      {showDialog && (
        <>
          <DialogContainer role="dialog" aria-modal={showDialog}>
            <Title>{title}</Title>
            <ButtonWrapper>
              {LeftButton}
              {RightButton}
            </ButtonWrapper>
          </DialogContainer>
          <Dimmed onClick={closeDialog} />
        </>
      )}
    </>,
    document.body
  );
};

const DialogContainer = styled.article`
  width: 200px;
  height: 96px;
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid var(--black);
  border-radius: 10px;
  background: var(--white);
`;

const Title = styled.div`
  margin-top: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 28px;
`;

const Dimmed = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2.5px);
`;
