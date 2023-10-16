import { format } from 'date-fns';

export function getHoursAndMinutes(date: string | Date) {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return format(date, 'HH:mm');
}

export function getFullDate(date: string | Date) {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return format(date, 'd/M/yy');
}
