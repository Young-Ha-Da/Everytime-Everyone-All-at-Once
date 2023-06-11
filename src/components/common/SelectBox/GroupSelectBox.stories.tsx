import { GroupSelectBox, GroupSelectBoxProps } from './SelectBox';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/common/GroupSelectBox',
  component: GroupSelectBox,
  parameters: {
    docs: {
      description: {
        component: `select 인풋입니다. 필참 인원을 설정할 때 사용합니다`,
      },
    },
  },
  args: {
    deselectOption: (value: string) => console.log('deselect ' + value),
    toggleOption: (value: string) => console.log('toggle ' + value),
    toggleGroup: (group: string) => console.log('toggle ' + group),
    toggleAll: () => console.log('toggle All'),
    placeholder: '필참 인원을 선택해주세요',
  },
} as ComponentMeta<typeof GroupSelectBox>;

const Template: ComponentStory<typeof GroupSelectBox> = (args: GroupSelectBoxProps) => (
  <GroupSelectBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    { id: 1, value: '김마리', group: '감자', isSelected: false },
    { id: 2, value: '박소은', group: '고구마', isSelected: true },
    { id: 3, value: '윤석철', group: '고구마', isSelected: true },
  ],
};
export const WithScroll = Template.bind({});
WithScroll.args = {
  options: [
    { id: 1, value: '김마리', group: '감자', isSelected: false },
    { id: 2, value: '박소은', group: '감자', isSelected: true },
    { id: 3, value: '윤석철', group: '감자', isSelected: true },
    { id: 4, value: '김마리', group: '감자', isSelected: false },
    { id: 5, value: '박소은', group: '고구마', isSelected: true },
    { id: 6, value: '윤석철', group: '고구마', isSelected: true },
    { id: 7, value: '김마리', group: '감자', isSelected: false },
    { id: 8, value: '박소은', group: '고구마', isSelected: true },
  ],
};
