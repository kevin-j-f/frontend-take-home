import React, { useEffect, useState } from 'react';
import PackageList from './components/package-list';
import SearchForm from './components/search-form';
import './App.scss';

const App = () => {
  // App state, used in both components, managed at higher level
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState([]);

  return (
    <div className="App">
      <SearchForm 
        loading={loading}
        setError={setError}
        setLoading={setLoading}
        setPackages={setPackages} />
      <PackageList 
        error={error}
        loading={loading}
        packages={packages} />
    </div>
  );
}

export default App;
