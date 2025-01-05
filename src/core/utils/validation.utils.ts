// validation.utils.ts
// import * as Joi from 'joi';

export class ValidationUtils {
    // Email Validation
    static validateEmail(email: string): boolean {
        // const schema = Joi.string().email().required();
        // const { error } = schema.validate(email);
        // return !error;
        return false;
    }

    // Phone Number Validation (basic example)
    static validatePhoneNumber(phone: string): boolean {
        // const schema = Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).required();
        // const { error } = schema.validate(phone);
        // return !error;
        return false;
    }

    // Address Validation
    static validateAddress(address: string): boolean {
        // const schema = Joi.string().min(5).max(255).required();
        // const { error } = schema.validate(address);
        // return !error;
        return false;
    }
}
