function validateForm(data) {
    const errors = [];
    if (!data.username || data.username.length < 3) {
        errors.push('Username is required and must be at least 3 characters.');
    }
    if (!data.password || data.password.length < 6) {
        errors.push('Password is required and must be at least 6 characters.');
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

module.exports = { validateForm };

//Write unit tests for validateForm function








