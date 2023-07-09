import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Option, PlanList, PlanListProps } from './PlanList';
import { useState } from 'react';
import styled from 'styled-components';

export default {
  title: 'Components/common/PlanList',
  component: PlanList,
  parameters: {
    docs: {
      description: {
        component: `약속 목록입니다.`,
      },
    },
  },
} as ComponentMeta<typeof PlanList>;

const Template: ComponentStory<typeof PlanList> = (args: PlanListProps) => {
  const [options, setOptions] = useState<Option[]>([
    { title: '약속1', href: '/plan1', selected: true },
    { title: '약속2', href: '/plan2', selected: false },
    { title: '약속3', href: '/plan3', selected: false },
  ]);
  return (
    <Wrapper>
      <PlanList {...args} options={options} setOptions={setOptions} />
    </Wrapper>
  );
};

export const DefaultPlanList = Template.bind({});
DefaultPlanList.args = {};

export const CheckboxPlanList = Template.bind({});
CheckboxPlanList.args = {
  withSelectBox: true,
};

const Wrapper = styled.div`
  width: 260px;
`;
