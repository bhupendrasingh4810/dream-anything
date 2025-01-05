// encryption.utils.ts
import * as crypto from 'crypto';

export class EncryptionUtils {
    // AES Encryption and Decryption
    static encrypt(text: string, secretKey: string): string {
        const cipher = crypto.createCipher('aes-256-cbc', secretKey);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    static decrypt(encryptedText: string, secretKey: string): string {
        const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
        let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }

    // Generate secure random keys
    static generateRandomKey(length: number): string {
        return crypto.randomBytes(length).toString('hex');
    }

    // SHA-256 Hashing
    static sha256(text: string): string {
        return crypto.createHash('sha256').update(text).digest('hex');
    }
}
