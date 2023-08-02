import useGetData from './useGetData';

import React from 'react';

function Post() {
	const data = useGetData('https://jsonplaceholder.typicode.com/posts');
	console.log(data);
	return <div>Posts</div>;
}

export default Post;
