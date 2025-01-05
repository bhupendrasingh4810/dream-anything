// regex.utils.ts
export class RegexUtils {
    // Common patterns
    static emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    static phonePattern = /^\+?[1-9]\d{1,14}$/;
    static urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;

    // Validate using predefined patterns
    static validateEmail(email: string): boolean {
        return this.emailPattern.test(email);
    }

    static validatePhone(phone: string): boolean {
        return this.phonePattern.test(phone);
    }

    static validateUrl(url: string): boolean {
        return this.urlPattern.test(url);
    }
}
