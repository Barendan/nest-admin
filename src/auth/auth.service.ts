import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService) {

  }

  async userId(request: Request): Promise<number> {
    console.log('Request received in userId method');
    
    const cookie = request.cookies['jwt'];

    try {
      const data = await this.jwtService.verifyAsync(cookie);
      
      return data['id'];
    } catch (error) {
      console.error('JWT verification failed:', error);
    
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

}
