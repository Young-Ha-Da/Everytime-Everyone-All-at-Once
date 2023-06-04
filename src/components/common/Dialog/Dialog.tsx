import { Dispatch, ReactNode, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export interface DialogProps {
  children: ReactNode;
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
}

export const Dialog = ({ children, showDialog, setShowDialog }: DialogProps) => {
  const closeDialog = () => {
    setShowDialog(false);
  };

  return createPortal(
    <>
      {showDialog && (
        <>
          <DialogContainer role="dialog" aria-modal={showDialog}>
            {children}
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
