import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavigationBar } from './NavigationBar';

import { ReactComponent as UserIcon } from '@/assets/user-solid.svg';
import { ReactComponent as StarIcon } from '@/assets/star-solid.svg';
import { ReactComponent as RankIcon } from '@/assets/ranking-star-solid.svg';
import { ReactComponent as GlassIcon } from '@/assets/magnifying-glass-plus-solid.svg';

export default {
  title: 'Components/common/NavigationBar',
  component: NavigationBar,
  parameters: {
    docs: {
      description: {
        component: `하단 네비게이션 바입니다`,
      },
    },
  },
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => <NavigationBar {...args} />;

export const BottomNavigationBar = Template.bind({});
BottomNavigationBar.args = {
  navList: [
    { href: './profile', iconComponent: <UserIcon />, text: '프로필', selected: true },
    { href: './vote', iconComponent: <StarIcon />, text: '투표하기', selected: false },
    { href: './result', iconComponent: <RankIcon />, text: '투표결과', selected: false },
    { href: './info', iconComponent: <GlassIcon />, text: '약속정보', selected: false },
  ],
};
