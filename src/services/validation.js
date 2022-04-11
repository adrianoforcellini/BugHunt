export default {
    validation: (title, author) => {
        if (title.length < 3 || title.length > 60) {
            alert("O título deve ter entre 3 e 60 caracteres.");
            return false;
        }
        if (author.length < 3 || author.length > 60) {
            alert("O nome do autor deve ter entre 3 e 60 caracteres.");
            return false;
        }
        return true;
    }
};