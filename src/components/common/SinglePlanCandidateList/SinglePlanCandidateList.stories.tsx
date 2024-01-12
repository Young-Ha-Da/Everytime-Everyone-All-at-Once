import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';

import { SinglePlanCandidateList, SinglePlanCandidateListProps } from './SinglePlanCandidateList';
import { mock_single_data_list } from '@/utils/mock';

export default {
  title: 'Components/common/SinglePlanCandidateList',
  component: SinglePlanCandidateList,
  parameters: {
    docs: {
      description: {
        component: `단일 약속 후보 리스트입니다.`,
      },
    },
  },
} as ComponentMeta<typeof SinglePlanCandidateList>;

const Template: ComponentStory<typeof SinglePlanCandidateList> = (
  args: SinglePlanCandidateListProps
) => (
  <Wrapper>
    <SinglePlanCandidateList {...args} />
  </Wrapper>
);
export const Default = Template.bind({});
Default.args = {
  singleResult: mock_single_data_list,
};

const Wrapper = styled.div`
  width: 260px;
`;
