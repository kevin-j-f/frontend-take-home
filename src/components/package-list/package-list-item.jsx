import React from 'react';

const PackageListItem = ({ date, description, links, name, publisher, version }) => (
	<li className={'package-list__item'} key={`${name}-${date}`}>
		<h3 className={'package-list__item__name'}>
			<a href={links.npm}>
				{name}
			</a>
		</h3>
		<p className={'package-list__item__description'}>{description}</p>
		<span>
			<a 
				className={'package-list__item__username'}
				href={`https://www.npmjs.com/~${publisher.username}`}>
				{publisher.username}
			</a>
			<span className={'package-list__item__published'}>
				published {version} @ {new Date(date).toLocaleDateString()}
			</span>
		</span>
	</li>
);

export default PackageListItem;