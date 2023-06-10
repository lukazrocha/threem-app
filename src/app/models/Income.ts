import { Account } from './Account';
import { Category } from './Category';

export interface Income {
  id?: string;
  amount: string;
  date: string;
  account: string;
  category: Category;
  note?: string;
}
