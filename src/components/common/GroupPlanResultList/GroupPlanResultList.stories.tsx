import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';

import { mock_group_data_list } from '@/utils/mock';
import { GroupPlanResultList, GroupPlanResultListProps } from './GroupPlanResultList';

export default {
  title: 'Components/common/GroupPlanResultList',
  component: GroupPlanResultList,
  parameters: {
    docs: {
      description: {
        component: `약속 결과 리스트입니다.`,
      },
    },
  },
} as ComponentMeta<typeof GroupPlanResultList>;

const Template: ComponentStory<typeof GroupPlanResultList> = (args: GroupPlanResultListProps) => (
  <Wrapper>
    <GroupPlanResultList {...args} />
  </Wrapper>
);
export const Default = Template.bind({});
Default.args = {
  groupResult: mock_group_data_list,
};

const Wrapper = styled.div`
  width: 260px;
`;
