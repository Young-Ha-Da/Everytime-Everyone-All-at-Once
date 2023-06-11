import { useForm } from 'react-hook-form';
import { TextInput, TextInputProps } from './TextInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { rgb2hex } from '@/lib/color';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/common/TextInput',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: `텍스트 인풋입니다`,
      },
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: unusedRegister,
  ...args
}: TextInputProps) => {
  const { register } = useForm();
  return <TextInput register={register('name')} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: '이름',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: '이름',
  hiddenLabel: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: '이름',
  placeholder: '구라방',
};

export const FocusedWithPlaceholder = Template.bind({});
FocusedWithPlaceholder.args = {
  label: '이름',
  placeholder: '구라방',
};
FocusedWithPlaceholder.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const hourInput = await canvas.findByText('이름');
  const input = hourInput.parentElement?.querySelector('input');

  await userEvent.click(hourInput);

  const style = input ? getComputedStyle(input) : { backgroundColor: '' };
  const bgColor = style.backgroundColor ? rgb2hex(style.backgroundColor) : '';

  await expect(bgColor).toEqual('#FFF9EB');
};
