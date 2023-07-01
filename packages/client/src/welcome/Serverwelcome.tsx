import axios from 'axios';
import { useEffect, useState } from 'react';

const ServerWelcome = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('test 1234534');
    async function getServerData() {
      const response = await axios.get(
        `http://${process.env.NX_SERVER_URL}:${process.env.NX_SERVER_PORT}/welcome`
      );
      if (response) {
        setMessage(response.data);
      }
    }
    getServerData();
  }, []);

  return <>Latest Message from Server: {message}</>;
};

export default ServerWelcome;
