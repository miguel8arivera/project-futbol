export interface Props {
  title?: string;
}

export interface Task {
  id: number;
  star: number;
  title: string;
  description: string;
  price: number;
  completed: boolean;
}
