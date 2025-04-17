import { JwtPayload } from 'jsonwebtoken';

export interface JwtUserPayload extends JwtPayload {
  id: number;
  username: string;
  email: string;
}
