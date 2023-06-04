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

const Template: ComponentStory<typeof Dialog> = (args: DialogProps) => <Dialog {...args} />;

export const DeleteDialog = Template.bind({});
DeleteDialog.args = {
  showDialog: true,
  children: (
    <>
      <div style={{ marginTop: '10px' }}>삭제하시겠습니까?</div>
      <div style={{ display: 'flex', gap: '28px' }}>
        <TextButton backgroundColor="var(--gray)" onClick={() => {}} size="small" type="button">
          취소
        </TextButton>
        <TextButton backgroundColor="var(--red)" onClick={() => {}} size="small" type="submit">
          삭제
        </TextButton>
      </div>
    </>
  ),
};

export const GenerateDialog = Template.bind({});
GenerateDialog.args = {
  showDialog: true,
  children: (
    <>
      <div style={{ marginTop: '10px' }}>어떤 약속을 원하십니까?</div>
      <div style={{ display: 'flex', gap: '28px' }}>
        <TextButton backgroundColor="var(--purple)" onClick={() => {}} size="small" type="button">
          그룹
        </TextButton>
        <TextButton backgroundColor="var(--yellow)" onClick={() => {}} size="small" type="submit">
          단일
        </TextButton>
      </div>
    </>
  ),
};

export const ConfirmDialog = Template.bind({});
ConfirmDialog.args = {
  showDialog: true,
  children: (
    <>
      <div style={{ marginTop: '10px' }}>확정하시겠습니까?</div>
      <div style={{ display: 'flex', gap: '28px' }}>
        <TextButton backgroundColor="var(--gray)" onClick={() => {}} size="small" type="button">
          취소
        </TextButton>
        <TextButton backgroundColor="var(--green)" onClick={() => {}} size="small" type="submit">
          확정
        </TextButton>
      </div>
    </>
  ),
};
