import React, { useState } from 'react';
import './index.scss';

const SearchForm = ({ loading, setError, setLoading, setPackages }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const search = (e) => {
		// stop page reload
		e.preventDefault();
		// if no search term or already loading then do nothing
		if(!searchTerm || loading) return;

		// reset error state, set loading state
		setError(null);
		setLoading(true);

		fetch(`https://api.npms.io/v2/search/suggestions?q=${searchTerm}`)
			.then(r => r.json())
			.then(data => {
				// packages loaded, set and unset loading state
				setPackages(data);
				setLoading(false);

				// we could add some sort of caching here for each search
				// so if they search the same term twice it doesn't refetch
			})
			.catch(e => {
				// call failed, set error and unset loading
				setError(e);
				setLoading(false);
			});
	};

	return (
		<form
			className={'search-form'}
			onSubmit={(e) => search(e)}>
			<svg viewBox="0 0 780 250" aria-hidden="true"><path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path></svg>
			<div>
				<input 
					className={'search-form__input'}
					type={'search'}
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					placeholder={'Search packages'} />
				<button
					className={'search-form__button'}
					type={'button'}
					onClick={(e) => search(e)}
					disabled={loading || !searchTerm}>
					Search
				</button>
			</div>
		</form>
	);
}

export default SearchForm;