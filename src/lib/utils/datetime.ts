import { format, formatDistance } from 'date-fns';

export const formatDate = (date: string) => format(new Date(date), 'eee do MMM yyy');

export const humanize = (date: string) => {
	return formatDistance(new Date(date), new Date(), { addSuffix: true });
};
