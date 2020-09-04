import { createClient } from 'redis';

const client = createClient();
client.on('ready', () => console.log('>> Redis Ready!!'));
client.on('error', (error: any) => console.log('Error Redis: ', error));

export default client;
