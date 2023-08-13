import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateutilService {
  date: string;

  constructor() {
    this.setCurrentDate();
  }

  setCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    this.date = `${year}-${month}-${day}`;
  }

  getCurrentDate(): string {
    this.setCurrentDate();
    return this.date;
  }

  getCurrentTimestamp(): string {
    this.setCurrentDate();
    return this.convertDate(this.date);
  }

  convertDate(date: string): string {
    return date + 'T00:00:00';
  }
}
