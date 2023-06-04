import { useState } from 'react';
import { TextButton } from '../TextButton';
import { Dialog, DialogProps } from './Dialog';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/common/Dialog',
  component: Dialog,

  parameters: {
    docs: {
      description: {
        component: `다이얼로그입니다`,
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args: DialogProps) => {
  const [showDialog, setShowDialog] = useState(true);
  return <Dialog {...args} showDialog={showDialog} setShowDialog={setShowDialog} />;
};

export const DeleteDialog = Template.bind({});
DeleteDialog.args = {
  title: '삭제하시겠습니까?',
  LeftButton: (
    <TextButton backgroundColor="var(--gray)" onClick={() => {}} size="small" type="button">
      취소
    </TextButton>
  ),
  RightButton: (
    <TextButton
      backgroundColor="var(--red)"
      onClick={() => {
        console.log('삭제');
      }}
      size="small"
      type="submit"
    >
      삭제
    </TextButton>
  ),
};

export const GenerateDialog = Template.bind({});
GenerateDialog.args = {
  title: '어떤 약속을 원하십니까?',
  LeftButton: (
    <TextButton as="a" href="./group" backgroundColor="var(--purple)" size="small" type="button">
      그룹
    </TextButton>
  ),
  RightButton: (
    <TextButton as="a" href="./single" backgroundColor="var(--yellow)" size="small" type="button">
      단일
    </TextButton>
  ),
};

export const ConfirmDialog = Template.bind({});
ConfirmDialog.args = {
  title: '확정하시겠습니까?',
  LeftButton: (
    <TextButton backgroundColor="var(--gray)" onClick={() => {}} size="small" type="button">
      취소
    </TextButton>
  ),
  RightButton: (
    <TextButton
      backgroundColor="var(--green)"
      onClick={() => {
        console.log('확정');
      }}
      size="small"
      type="submit"
    >
      확정
    </TextButton>
  ),
};
