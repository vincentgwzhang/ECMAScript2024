{
    class BookES2024 {
        #author;
    
        constructor(author) {
            this.#author = author;
        }
    
        static hasAuthorField(obj) {
            return #author in obj; // New ES2024 syntax for checking private field
        }
    }
    
    // Example usage:
    const myBook2024 = new BookES2024("Igor Komolov");
    console.log(BookES2024.hasAuthorField(myBook2024)); // Expected output: true
    
    const otherObject2024 = {};
    console.log(BookES2024.hasAuthorField(otherObject2024)); // Expected output: false
}