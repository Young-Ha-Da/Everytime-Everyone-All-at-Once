import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';

import { GroupPlanCandidateList, GroupPlanCandidateListProps } from './GroupPlanCandidateList';
import { mock_group_data_list } from '@/utils/mock';

export default {
  title: 'Components/common/GroupPlanCandidateList',
  component: GroupPlanCandidateList,
  parameters: {
    docs: {
      description: {
        component: `다중 약속 후보 리스트입니다.`,
      },
    },
  },
} as ComponentMeta<typeof GroupPlanCandidateList>;

const Template: ComponentStory<typeof GroupPlanCandidateList> = (
  args: GroupPlanCandidateListProps
) => (
  <Wrapper>
    <GroupPlanCandidateList {...args} />
  </Wrapper>
);
export const Default = Template.bind({});
Default.args = {
  groupResult: mock_group_data_list,
};

const Wrapper = styled.div`
  width: 260px;
`;
