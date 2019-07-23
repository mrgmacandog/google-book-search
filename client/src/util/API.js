import axios from "axios";

// Export an object containing methos to get books by title/author from the Google Books API
export default {
    getBooksByTitle: function (title) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`);
    },
    getBooksByAuthor: function (author) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`);
    }
};
