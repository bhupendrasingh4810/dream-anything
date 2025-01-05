// image.utils.ts
// import * as sharp from 'sharp';
import * as fs from 'fs';

export class ImageUtils {
    // Resize and compress an image
    static async resizeAndCompress(inputPath: string, outputPath: string, width: number, height: number): Promise<void> {
        //     await sharp(inputPath)
        //         .resize(width, height)
        //         .jpeg({ quality: 80 })
        //         .toFile(outputPath);
    }

    // // Convert between image formats (e.g., PNG to JPG)
    static async convertImageFormat(inputPath: string, outputPath: string, format: string): Promise<void> {
        //     await sharp(inputPath)
        //         .toFormat(format)
        //         .toFile(outputPath);
    }

    // // Generate thumbnail (e.g., 100x100)
    static async generateThumbnail(inputPath: string, outputPath: string): Promise<void> {
        //     await sharp(inputPath)
        //         .resize(100, 100)
        //         .toFile(outputPath);
    }
}
