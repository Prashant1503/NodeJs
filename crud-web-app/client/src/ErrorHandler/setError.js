export const setErrors = (title,description,postCategory) => {

    let errors = {};
    errors.title = title ? "" : "Title field is required";
    errors.description = description ? "" : "Description field is required";
    errors.postCategory = postCategory ? "" : "Category field is required";


    return errors;

};