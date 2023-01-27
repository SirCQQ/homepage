import { ImageResponse } from '@vercel/og';
import { NextApiRequest } from 'next';
export const config = {
  runtime: 'edge'
};

export default function handler(req: NextApiRequest) {
  const { searchParams } = new URL(req.url);
  console.log(searchParams);
  return new ImageResponse(<div>{searchParams}</div>, {
    width: 1200,
    height: 630
  });
}
