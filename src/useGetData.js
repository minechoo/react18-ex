import { useState, useEffect } from 'react';
import axios from 'axios';

export const getData = async () => {
	const promise = await axios.get('https://jsonplaceholder.typicode.com/posts').then((reponse) => reponse.data);
	console.log(promise);
};
