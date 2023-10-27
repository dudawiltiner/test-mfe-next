export interface ItemProps {
  value: number;
  name: string;
  description: string;
  createdAt: string;
  showSecondComponent?: boolean;
  secondComponent?: React.ReactNode;
  actions?: React.ReactNode;
}
