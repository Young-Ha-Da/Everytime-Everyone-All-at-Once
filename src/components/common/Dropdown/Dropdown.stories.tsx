import { Dropdown, DropdownProps } from './Dropdown';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/common/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `드롭다운 컴포넌트입니다. 약속 변경을 위한 상단 네비게이션 바에 사용됩니다.`,
      },
    },
  },
  args: {
    previewText: '7월 정기 모임',
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ ...args }: DropdownProps) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Dropdown.ItemGroup>
        {['옵션1', '옵션2', '옵션3'].map((opt) => (
          <Dropdown.Item key={opt}>
            <a
              href="/"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                fontSize: '16px',
              }}
            >
              {opt}
            </a>
          </Dropdown.Item>
        ))}
      </Dropdown.ItemGroup>
    </>
  ),
};
export const WithMultipleGroups = Template.bind({});
WithMultipleGroups.args = {
  children: (
    <>
      <Dropdown.ItemGroup>
        {['옵션1', '옵션2', '옵션3'].map((opt) => (
          <Dropdown.Item key={opt}>
            <a
              href="/"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                fontSize: '16px',
              }}
            >
              {opt}
            </a>
          </Dropdown.Item>
        ))}
      </Dropdown.ItemGroup>
      <Dropdown.ItemGroup>
        <Dropdown.Item>추가</Dropdown.Item>
      </Dropdown.ItemGroup>
    </>
  ),
};

export const Opened = Template.bind({});
Opened.args = {
  children: (
    <>
      <Dropdown.ItemGroup>
        {['옵션1', '옵션2', '옵션3'].map((opt) => (
          <Dropdown.Item key={opt}>
            <a
              href="/"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                fontSize: '16px',
              }}
            >
              {opt}
            </a>
          </Dropdown.Item>
        ))}
      </Dropdown.ItemGroup>
      <Dropdown.ItemGroup>
        <Dropdown.Item>추가</Dropdown.Item>
      </Dropdown.ItemGroup>
    </>
  ),
};
Opened.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const toggleButton = await canvas.findByText('7월 정기 모임');

  await userEvent.click(toggleButton);

  const option = await canvas.findByText('옵션1');

  await expect(option).toBeTruthy();
};
