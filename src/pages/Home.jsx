import React from 'react';
import HomeContainer from '@containers/Home';
import { useSelector } from 'react-redux';
import NoPermission from 'src/components/NoPermission';

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { isAdmin } = user || {};

  if (!isAdmin) return <NoPermission />;

  return <HomeContainer />;
};

export default Home;
