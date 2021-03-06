import client from './client';

const tweetsBaseUrl = '/api/v1';

export const getLatestTweets = () => {
	const url = `${tweetsBaseUrl}/tweets?_expand=user&_embed=likes&_sort=createAt&_order=desc`;
	return client.get(url);
};
