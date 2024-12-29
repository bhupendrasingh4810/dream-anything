import { Module } from '@nestjs/common';
import { CacheModule as NestCacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
    imports: [
        NestCacheModule.register({
            store: redisStore as any, // Casting to any to avoid type conflict
            host: 'localhost',        // Redis host (change if needed)
            port: 6379,               // Redis port (default is 6379)
            ttl: 3600,                // Time to live for cache (optional)
        }),
    ],
    exports: [NestCacheModule],   // Export the module if you want to use it elsewhere
})
export class CacheModule { }