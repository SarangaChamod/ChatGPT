import { ExpoRequest, ExpoResponse } from 'expo-router/server';

const API_KEY = process.env.API_KEY;
export function GET(request: ExpoRequest) {
  console.log('key: ', API_KEY);
  return ExpoResponse.json({ hello: 'Test API KEY'});
}
