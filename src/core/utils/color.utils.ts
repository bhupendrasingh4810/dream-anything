// color.utils.ts
export class ColorUtils {
    // Convert hex to RGB
    static hexToRgb(hex: string): { r: number, g: number, b: number } | null {
        const result = /^#([0-9A-F]{6})$/i.exec(hex);
        if (!result) return null;
        return {
            r: parseInt(result[1].substring(0, 2), 16),
            g: parseInt(result[1].substring(2, 4), 16),
            b: parseInt(result[1].substring(4, 6), 16),
        };
    }

    // Generate a contrasting color (light or dark)
    static generateContrastingColor(hex: string): string {
        const { r, g, b } = this.hexToRgb(hex) || { r: 0, g: 0, b: 0 };
        const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return brightness < 128 ? '#FFFFFF' : '#000000'; // White or black for contrast
    }

    // Lighten or darken a hex color
    static adjustColor(hex: string, percent: number): string {
        const { r, g, b } = this.hexToRgb(hex) || { r: 0, g: 0, b: 0 };
        const adjust = (color: number) => Math.min(255, Math.max(0, color + (color * percent)));
        return `#${((1 << 24) + (adjust(r) << 16) + (adjust(g) << 8) + adjust(b)).toString(16).slice(1).toUpperCase()}`;
    }
}
