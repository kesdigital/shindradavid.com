import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

// custom remark plugins

export function remarkReadingTime() {
	return function (tree: any, file: any) {
		const textOnPage = toString(tree);
		const readingTimeText = getReadingTime(textOnPage).text;
		console.log(file);
	};
}
