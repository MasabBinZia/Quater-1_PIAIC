type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Masab",
        lastName: "Bin Zia"
    },
    name: "My Best Book"
}

console.log(myBook.author);
