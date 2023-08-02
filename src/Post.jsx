import useGetData from './useGetData';

import React from 'react';

function Post() {
	const data = useGetData('https://jsonplaceholder.typicode.com/posts');
	console.log(data);
	return (
		<div>
			{data &&
				data.map((post) => {
					return (
						<div key={post.id}>
							<h2>{post.title}</h2>
							<br />
							<p>{post.body}</p>
							<br />
						</div>
					);
				})}
		</div>
	);
}

export default Post;
