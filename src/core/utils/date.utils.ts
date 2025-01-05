/**
 * Utility class for date operations in an enterprise-grade system.
 */
export class DateUtils {
    /**
     * Formats a Date object into a specified format.
     * Supports placeholders: YYYY, MM, DD, HH, mm, ss.
     * @param date - The date to format.
     * @param format - The desired format (e.g., 'YYYY-MM-DD HH:mm:ss').
     * @returns The formatted date string.
     * @throws Error if an invalid date is provided.
     */
    static formatDate(date: Date, format: string): string {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }

        const tokens: Record<string, string | number> = {
            YYYY: date.getFullYear(),
            MM: String(date.getMonth() + 1).padStart(2, '0'),
            DD: String(date.getDate()).padStart(2, '0'),
            HH: String(date.getHours()).padStart(2, '0'),
            mm: String(date.getMinutes()).padStart(2, '0'),
            ss: String(date.getSeconds()).padStart(2, '0'),
        };

        return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => String(tokens[match]));
    }

    /**
     * Calculates the difference between two dates in days.
     * @param startDate - The start date.
     * @param endDate - The end date.
     * @returns The number of days between the two dates.
     * @throws Error if invalid dates are provided.
     */
    static calculateDaysDifference(startDate: Date, endDate: Date): number {
        if (!(startDate instanceof Date) || isNaN(startDate.getTime())) {
            throw new Error('Invalid startDate provided.');
        }
        if (!(endDate instanceof Date) || isNaN(endDate.getTime())) {
            throw new Error('Invalid endDate provided.');
        }

        const diffTime = endDate.getTime() - startDate.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    /**
     * Validates if a given date is in the past.
     * @param date - The date to validate.
     * @returns True if the date is in the past, false otherwise.
     * @throws Error if an invalid date is provided.
     */
    static isDateInPast(date: Date): boolean {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }
        return date.getTime() < new Date().getTime();
    }

    /**
     * Adds a specified number of days to a date.
     * @param date - The original date.
     * @param days - The number of days to add. Use a negative number to subtract days.
     * @returns A new Date object.
     * @throws Error if an invalid date is provided.
     */
    static addDaysToDate(date: Date, days: number): Date {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    /**
     * Converts a date to an ISO string without timezone information.
     * @param date - The date to convert.
     * @returns The ISO string in 'YYYY-MM-DDTHH:mm:ss' format.
     * @throws Error if an invalid date is provided.
     */
    static toIsoStringWithoutTimezone(date: Date): string {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }
        return date.toISOString().split('.')[0];
    }

    /**
     * Retrieves the start of the day for a given date.
     * @param date - The date to process.
     * @returns A new Date object representing the start of the day.
     * @throws Error if an invalid date is provided.
     */
    static getStartOfDay(date: Date): Date {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    /**
     * Retrieves the end of the day for a given date.
     * @param date - The date to process.
     * @returns A new Date object representing the end of the day.
     * @throws Error if an invalid date is provided.
     */
    static getEndOfDay(date: Date): Date {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
    }

    /**
     * Parses a date string and returns a Date object.
     * @param dateString - The date string to parse.
     * @returns A Date object.
     * @throws Error if the string cannot be parsed into a valid date.
     */
    static parseDateString(dateString: string): Date {
        const parsedDate = new Date(dateString);
        if (isNaN(parsedDate.getTime())) {
            throw new Error('Invalid date string provided.');
        }
        return parsedDate;
    }

    /**
 * Checks if a date falls within a specified range.
 * @param date - The date to check.
 * @param startDate - The start of the range (inclusive).
 * @param endDate - The end of the range (inclusive).
 * @returns True if the date is in the range, false otherwise.
 * @throws Error if any invalid dates are provided.
 */
    static isDateInRange(date: Date, startDate: Date, endDate: Date): boolean {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }
        if (!(startDate instanceof Date) || isNaN(startDate.getTime())) {
            throw new Error('Invalid startDate provided.');
        }
        if (!(endDate instanceof Date) || isNaN(endDate.getTime())) {
            throw new Error('Invalid endDate provided.');
        }
        return date >= startDate && date <= endDate;
    }

    /**
   * Returns the current timestamp in milliseconds.
   * @returns The current timestamp.
   */
    static getCurrentTimestamp(): number {
        return Date.now();
    }

    /**
   * Compares two dates.
   * @param date1 - The first date.
   * @param date2 - The second date.
   * @returns -1 if date1 is before date2, 1 if date1 is after date2, 0 if equal.
   * @throws Error if invalid dates are provided.
   */
    static compareDates(date1: Date, date2: Date): number {
        if (!(date1 instanceof Date) || isNaN(date1.getTime())) {
            throw new Error('Invalid date1 provided.');
        }
        if (!(date2 instanceof Date) || isNaN(date2.getTime())) {
            throw new Error('Invalid date2 provided.');
        }

        if (date1 < date2) return -1;
        if (date1 > date2) return 1;
        return 0;
    }

    /**
   * Gets the ISO week number for a given date.
   * @param date - The date to calculate the week number.
   * @returns The ISO week number (1-53).
   * @throws Error if an invalid date is provided.
   */
    static getWeekNumber(date: Date): number {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }

        const startOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDays = Math.floor((date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
        return Math.ceil((pastDays + startOfYear.getDay() + 1) / 7);
    }

    /**
   * Gets the quarter of the year for a given date.
   * @param date - The date to calculate the quarter.
   * @returns The quarter (1-4).
   * @throws Error if an invalid date is provided.
   */
    static getQuarter(date: Date): number {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }
        return Math.ceil((date.getMonth() + 1) / 3);
    }

    /**
   * Calculates the age based on the provided birthdate.
   * @param birthdate - The birthdate to calculate age.
   * @returns The age in years.
   * @throws Error if an invalid birthdate is provided.
   */
    static calculateAge(birthdate: Date): number {
        if (!(birthdate instanceof Date) || isNaN(birthdate.getTime())) {
            throw new Error('Invalid birthdate provided.');
        }

        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        return age;
    }

    /**
   * Gets the number of days in a specific month.
   * @param year - The year.
   * @param month - The month (1-12).
   * @returns The number of days in the month.
   * @throws Error if the month is not valid.
   */
    static getDaysInMonth(year: number, month: number): number {
        if (month < 1 || month > 12) {
            throw new Error('Invalid month provided. Month must be between 1 and 12.');
        }
        return new Date(year, month, 0).getDate();
    }

    /**
   * Adds or subtracts months from a given date.
   * @param date - The initial date.
   * @param months - The number of months to add (negative to subtract).
   * @returns A new Date object.
   * @throws Error if an invalid date is provided.
   */
    static addMonths(date: Date, months: number): Date {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }

        const result = new Date(date);
        result.setMonth(result.getMonth() + months);
        return result;
    }

    /**
   * Gets the timezone offset for the current date.
   * @returns The timezone offset as a string (e.g., '+05:30', '-07:00').
   */
    static getTimezoneOffset(): string {
        const offset = new Date().getTimezoneOffset();
        const absOffset = Math.abs(offset);
        const hours = String(Math.floor(absOffset / 60)).padStart(2, '0');
        const minutes = String(absOffset % 60).padStart(2, '0');
        return `${offset > 0 ? '-' : '+'}${hours}:${minutes}`;
    }

    /**
   * Converts a date to a specific timezone.
   * @param date - The date to convert.
   * @param timeZone - The target timezone (e.g., 'America/New_York', 'Asia/Kolkata').
   * @returns A string representing the date in the target timezone.
   * @throws Error if an invalid date or timezone is provided.
   */
    static convertToTimezone(date: Date, timeZone: string): string {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }
        if (!Intl.DateTimeFormat().resolvedOptions().timeZone) {
            throw new Error('Invalid timezone provided.');
        }

        return new Intl.DateTimeFormat('en-US', {
            timeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }).format(date);
    }

    /**
   * Formats a date based on locale and options.
   * @param date - The date to format.
   * @param locale - The target locale (e.g., 'en-US', 'fr-FR').
   * @param options - Formatting options (e.g., { weekday: 'long', year: 'numeric' }).
   * @returns A localized date string.
   * @throws Error if an invalid date is provided.
   */
    static formatDateLocalized(date: Date, locale: string, options: Intl.DateTimeFormatOptions): string {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }

        return new Intl.DateTimeFormat(locale, options).format(date);
    }

    /**
   * Generates recurring event dates.
   * @param startDate - The start date of the event.
   * @param frequency - The frequency ('daily', 'weekly', 'monthly').
   * @param occurrences - The number of occurrences.
   * @returns An array of Date objects representing the recurring dates.
   * @throws Error if an invalid date or frequency is provided.
   */
    static generateRecurringEvents(startDate: Date, frequency: 'daily' | 'weekly' | 'monthly', occurrences: number): Date[] {
        if (!(startDate instanceof Date) || isNaN(startDate.getTime())) {
            throw new Error('Invalid start date provided.');
        }
        if (occurrences <= 0) {
            throw new Error('Occurrences must be greater than 0.');
        }

        const events: Date[] = [];
        let currentDate = new Date(startDate);

        for (let i = 0; i < occurrences; i++) {
            events.push(new Date(currentDate));

            switch (frequency) {
                case 'daily':
                    currentDate.setDate(currentDate.getDate() + 1);
                    break;
                case 'weekly':
                    currentDate.setDate(currentDate.getDate() + 7);
                    break;
                case 'monthly':
                    currentDate.setMonth(currentDate.getMonth() + 1);
                    break;
                default:
                    throw new Error('Invalid frequency provided.');
            }
        }

        return events;
    }

    /**
   * Checks if a given date is a business day (Monday to Friday).
   * @param date - The date to check.
   * @returns True if the date is a business day, false otherwise.
   * @throws Error if an invalid date is provided.
   */
    static isBusinessDay(date: Date): boolean {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }

        const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
        return dayOfWeek >= 1 && dayOfWeek <= 5;
    }

    /**
   * Adds business days to a given date, skipping weekends.
   * @param date - The starting date.
   * @param businessDays - The number of business days to add.
   * @returns A new Date object after adding the business days.
   * @throws Error if an invalid date is provided.
   */
    static addBusinessDays(date: Date, businessDays: number): Date {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }
        if (businessDays < 0) {
            throw new Error('Business days must be a positive number.');
        }

        let remainingDays = businessDays;
        const resultDate = new Date(date);

        while (remainingDays > 0) {
            resultDate.setDate(resultDate.getDate() + 1);
            if (this.isBusinessDay(resultDate)) {
                remainingDays--;
            }
        }
        return resultDate;
    }

    /**
   * Gets public holidays for a specific region and year.
   * @param year - The year for which holidays are calculated.
   * @param region - The region code (e.g., 'US', 'IN').
   * @returns An array of Date objects representing public holidays.
   * @throws Error if the region is not supported.
   */
    static getPublicHolidays(year: number, region: string): Date[] {
        const holidays: Record<string, (year: number) => Date[]> = {
            US: (y) => [
                new Date(y, 0, 1), // New Year's Day
                new Date(y, 6, 4), // Independence Day
                new Date(y, 11, 25), // Christmas Day
            ],
            IN: (y) => [
                new Date(y, 0, 26), // Republic Day
                new Date(y, 7, 15), // Independence Day
                new Date(y, 9, 2), // Gandhi Jayanti
            ],
        };

        const calculateHolidays = holidays[region.toUpperCase()];
        if (!calculateHolidays) {
            throw new Error(`Unsupported region: ${region}`);
        }

        return calculateHolidays(year);
    }

    /**
   * Checks if a given date is a public holiday for a region.
   * @param date - The date to check.
   * @param region - The region code (e.g., 'US', 'IN').
   * @returns True if the date is a public holiday, false otherwise.
   */
    static isHoliday(date: Date, region: string): boolean {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }

        const holidays = this.getPublicHolidays(date.getFullYear(), region);
        return holidays.some(
            (holiday) =>
                holiday.getDate() === date.getDate() &&
                holiday.getMonth() === date.getMonth() &&
                holiday.getFullYear() === date.getFullYear()
        );
    }

    /**
   * Finds the next business day after a given date.
   * @param date - The starting date.
   * @returns The next business day as a Date object.
   * @throws Error if an invalid date is provided.
   */
    static getNextBusinessDay(date: Date): Date {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date provided.');
        }

        const nextDay = new Date(date);
        do {
            nextDay.setDate(nextDay.getDate() + 1);
        } while (!this.isBusinessDay(nextDay));

        return nextDay;
    }


}
