import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';

import { PlanResult } from './PlanResult';

import { mock_group_data_list, mock_single_data_list } from '@/utils/mock';

export default {
  title: 'Components/common/PlanResult',
  component: PlanResult,
  parameters: {
    docs: {
      description: {
        component: `약속 결과 입니다.`,
      },
    },
  },
} as ComponentMeta<typeof PlanResult>;

const Template: ComponentStory<typeof PlanResult> = (args) => (
  <Wrapper>
    <PlanResult {...args} />
  </Wrapper>
);
export const Group = Template.bind({});
Group.args = {
  isSinglePlanResult: false,
  result: mock_group_data_list[0],
};

export const Single = Template.bind({});
Single.args = {
  isSinglePlanResult: true,
  result: mock_single_data_list[0],
};

const Wrapper = styled.div`
  width: 260px;
`;
