import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loading = () => (
	<div className={'package-list__loading'}>
		<Audio
		  height="80"
		  width="80"
		  radius="9"
		  color="green"
		  ariaLabel="three-dots-loading"
		  wrapperStyle
		  wrapperClass
		/>
	</div>
);

export default Loading;