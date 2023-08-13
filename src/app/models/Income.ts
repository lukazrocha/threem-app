import { Account } from './Account';
import { Category } from './Category';

export interface Income {
  id?: string;
  amount: string;
  date: string;
  account: Account;
  category: Category;
  note?: string;
}
