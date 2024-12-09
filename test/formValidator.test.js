const { validateForm } = require('../formValidator');

describe('validateForm function', () => {
    it('should return isValid true when username and password are valid', () => {
        const formData = { username: 'validUser', password: 'validPassword' };
        const result = validateForm(formData);
        expect(result.isValid).toBe(true);
        expect(result.errors).toHaveLength(0);
    });

    it('should return isValid false when username is too short', () => {
        const formData = { username: 'us', password: 'validPassword' };
        const result = validateForm(formData);
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain('Username is required and must be at least 3 characters.');
    });

    it('should return isValid false when password is too short', () => {
        const formData = { username: 'validUser', password: '123' };
        const result = validateForm(formData);
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain('Password is required and must be at least 6 characters.');
    });
});


