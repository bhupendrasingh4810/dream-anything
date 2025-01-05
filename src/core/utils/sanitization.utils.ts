// sanitization.utils.ts
export class SanitizationUtils {
    // Prevent XSS attacks by escaping user input
    static escapeHtml(unsafe: string): string {
        return unsafe.replace(/[&<>"']/g, (match) => {
            switch (match) {
                case '&': return '&amp;';
                case '<': return '&lt;';
                case '>': return '&gt;';
                case '"': return '&quot;';
                case "'": return '&#039;';
                default: return match;
            }
        });
    }

    // Remove SQL/HTML injection code fragments (basic example)
    static sanitizeSqlInput(input: string): string {
        return input.replace(/(DROP|TRUNCATE|INSERT|UPDATE|DELETE)/gi, '');
    }
}
