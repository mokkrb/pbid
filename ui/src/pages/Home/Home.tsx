import React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { GET_URLS } from '../../queries/getUrls';
import { CREATE_URL } from '../../mutations/createUrl';
import UrlForm from '../../components/UrlForm';
import MinifiedUrls from '../../components/MinifiedUrls';
import './Home.css';

const Home = (): JSX.Element => {
  const { loading, data, refetch } = useQuery(GET_URLS, {
    fetchPolicy: 'cache-and-network',
  });
  const [createUrl] = useMutation(CREATE_URL, {
    onCompleted: () => {
      refetch();
    },
  });

  return (
    <div className="app" style={{}}>
      <UrlForm
        submitUrl={(input) => createUrl({ variables: { url: input } })}
      />
      {loading
        ? <>Fetching Urls</>
        : <MinifiedUrls urls={data?.getUrls || []} />
      }
    </div>
  );
};

export default Home;
