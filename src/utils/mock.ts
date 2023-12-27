interface Group {
  name: string;
  members: string[];
}

export interface ScheduleItem {
  from: string;
  to: string;
  group: Group;
}

export interface DataItem {
  id: string;
  schedule: ScheduleItem[];
}

export const totalMembers = ['이', '박', '최', '정', '이2', '최2'];

export const mock_group_data_list: DataItem[] = [
  {
    id: '1',
    schedule: [
      {
        from: '2023-12-27 12:00:00',
        to: '2023-12-27 12:00:00',
        group: { name: '그룹1', members: ['이', '박'] },
      },
      {
        from: '2023-12-27 12:00:00',
        to: '2023-12-27 12:00:00',
        group: { name: '그룹2', members: ['정', '최'] },
      },
      {
        from: '2023-12-27 12:00:00',
        to: '2023-12-27 12:00:00',
        group: { name: '그룹3', members: ['이2', '최2'] },
      },
    ],
  },
  {
    id: '2',
    schedule: [
      {
        from: '2023-12-27 12:00:00',
        to: '2023-12-27 12:00:00',
        group: { name: '그룹1', members: ['이', '박'] },
      },
      {
        from: '2023-12-27 12:00:00',
        to: '2023-12-27 12:00:00',
        group: { name: '그룹2', members: ['이', '최'] },
      },
      {
        from: '2023-12-27 12:00:00',
        to: '2023-12-27 12:00:00',
        group: { name: '그룹3', members: ['이', '최'] },
      },
    ],
  },
  {
    id: '3',
    schedule: [
      {
        from: '2023-12-27 12:00:00',
        to: '2023-12-27 12:00:00',
        group: { name: '그룹1', members: ['이', '박'] },
      },
      {
        from: '2023-12-27 12:00:00',
        to: '2023-12-27 12:00:00',
        group: { name: '그룹2', members: ['이2', '최'] },
      },
    ],
  },
  {
    id: '4',
    schedule: [
      {
        from: '2023-12-27 12:00:00',
        to: '2023-12-27 12:00:00',
        group: { name: '그룹1', members: ['이', '박'] },
      },
      {
        from: '2023-12-27 12:00:00',
        to: '2023-12-27 12:00:00',
        group: { name: '그룹2', members: ['이', '최'] },
      },
    ],
  },
  {
    id: '5',
    schedule: [
      {
        from: '2023-12-27 12:00:00',
        to: '2023-12-27 12:00:00',
        group: { name: '그룹1', members: ['이', '박', '최'] },
      },
    ],
  },
];
