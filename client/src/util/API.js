import axios from "axios";

// Export an object containing methos to get books by title/author from the Google Books API
export default {
    // Get books by title from Google Books API
    getBooksByTitle: function (title) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`);
    },
    // Get books by author from Google Books API
    getBooksByAuthor: function (author) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`);
    }
};
