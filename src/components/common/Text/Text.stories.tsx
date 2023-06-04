import { Text, TextProps } from './Text';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/common/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: `TextInput에 대응되는 텍스트 컴포넌트입니다`,
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({ ...args }: TextProps) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '텍스트',
};

export const LongText = Template.bind({});
LongText.args = {
  children: '이건 엄청 긴 텍스트인데 이렇게까지 긴 그룹 이름이 있을까?',
};
