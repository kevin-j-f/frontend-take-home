import React from 'react';
import Error from './error';
import Loading from './loading';
import PackageListItem from './package-list-item';
import './index.scss';

const PackageList = ({ error, loading, packages }) => {
	// show error if defined
	if(error) return <Error />;
	// show loading when call is out
	if(loading) return <Loading />;
	// if no packages or error or not loading show nothing, could also show 'no packages' message
	if(!packages || !packages.length) return null;

	return (
		<ul className={'package-list'}>
			{
				packages.map(p => (
					<PackageListItem
						date={p.package.date}
						description={p.package.description}
						links={p.package.links}
						name={p.package.name}
						publisher={p.package.publisher}
						version={p.package.version} />
				))
			}
		</ul>
	);
}

export default PackageList;