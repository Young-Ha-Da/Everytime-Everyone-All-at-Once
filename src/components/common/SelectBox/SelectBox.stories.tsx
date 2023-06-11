import { SelectBox, SelectBoxProps } from './SelectBox';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/common/SelectBox',
  component: SelectBox,
  parameters: {
    docs: {
      description: {
        component: `select 인풋입니다. 필참 인원을 설정할 때 사용합니다`,
      },
    },
  },
  args: {
    toggleOption: (value: string) => console.log('toggle ' + value),
    deselectOption: (value: string) => console.log('deselect ' + value),
    toggleAll: () => console.log('toggle All'),
    placeholder: '필참 인원을 선택해주세요',
  },
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args: SelectBoxProps) => (
  <SelectBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    { id: 1, value: '김마리', isSelected: false },
    { id: 2, value: '박소은', isSelected: true },
    { id: 3, value: '윤석철', isSelected: true },
  ],
};
export const WithScroll = Template.bind({});
WithScroll.args = {
  options: [
    { id: 1, value: '김마리', isSelected: false },
    { id: 2, value: '박소은', isSelected: true },
    { id: 3, value: '윤석철', isSelected: true },
    { id: 4, value: '김마리', isSelected: false },
    { id: 5, value: '박소은', isSelected: true },
    { id: 6, value: '윤석철', isSelected: true },
  ],
};
