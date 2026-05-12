const mongoose = require("mongoose");
const Book = require("./models/book");

mongoose.connect("mongodb://127.0.0.1:27017/readingClub")
.then(async () => {

    await Book.insertMany([
        {
            title: "Atomic Habits",
            author: "James Clear",
            category: "Self Development",
            summary: "Small habits create big results",
            description: "A guide to building good habits",
            pdf: "https://example.com/atomic.pdf",
            cover: "https://example.com/atomic.jpg",
            price: 0,
            isPaid: false,
            addedBy: "6a0377657a7075cf78e65cc4"
        },
        {
            title: "Clean Code",
            author: "Robert C. Martin",
            category: "Programming",
            summary: "Writing clean and maintainable code",
            description: "Best practices for developers",
            pdf: "https://example.com/clean.pdf",
            cover: "https://example.com/clean.jpg",
            price: 0,
            isPaid: false,
            addedBy: "6a0377657a7075cf78e65cc4"
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            category: "Fiction",
            summary: "A journey of following dreams",
            description: "A philosophical story about destiny",
            pdf: "https://example.com/alchemist.pdf",
            cover: "https://example.com/alchemist.jpg",
            price: 0,
            isPaid: false,
            addedBy: "6a0377657a7075cf78e65cc4"
        }
    ]);

    console.log("3 BOOKS INSERTED");
    process.exit();
});