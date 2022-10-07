import { compareDesc } from 'date-fns';

const getArticles = async () => {
	try {
		const articles: Article[] = await Promise.all(
			Object.entries(import.meta.glob('/src/routes/blog/**/+page.md')).map(
				async ([path, resolver]) => {
					const { metadata }: any = await resolver();
					const articleMetadata: ArticleMetadata = metadata;
					const articlePath = path.slice(11, -9).replace('/(blog)', ''); // remove the ending /+page.md and starting ../..
					return { ...articleMetadata, path: articlePath };
				}
			)
		).then((articles) =>
			articles.sort((a, b) => {
				return compareDesc(new Date(a.publishedOn), new Date(b.publishedOn));
			})
		);
		return articles;
	} catch (error) {
		console.log(error);
		throw new Error('An error occurred while fetching the articles');
	}
};

export const fetchArticles = async (limit = 6) => {
	try {
		const articles = await getArticles().then((articles) => articles.slice(0, limit));
		return articles;
	} catch (error) {
		throw new Error('An error occurred while fetching the articles');
	}
};

export const fetchPaginatedArticles = async () => {};
