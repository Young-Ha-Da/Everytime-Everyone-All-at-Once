import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';

import { SinglePlanResultList, SinglePlanResultListProps } from './SinglePlanResultList';
import { mock_single_data_list } from '@/utils/mock';

export default {
  title: 'Components/common/SinglePlanResultList',
  component: SinglePlanResultList,
  parameters: {
    docs: {
      description: {
        component: `약속 결과 리스트입니다.`,
      },
    },
  },
} as ComponentMeta<typeof SinglePlanResultList>;

const Template: ComponentStory<typeof SinglePlanResultList> = (args: SinglePlanResultListProps) => (
  <Wrapper>
    <SinglePlanResultList {...args} />
  </Wrapper>
);
export const Default = Template.bind({});
Default.args = {
  singleResult: mock_single_data_list,
};

const Wrapper = styled.div`
  width: 260px;
`;
