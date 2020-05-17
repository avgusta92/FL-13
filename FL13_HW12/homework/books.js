let booksStructure;

if (localStorage.getItem(`books`) === null) {
  booksStructure = [
    {
      id: `1`,
      bookName: `Book Name number 1`,
      author: `Author1`,
      imageUrl: `https://picsum.photos/id/20/200/300`,
      plot: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
      id: `2`,
      bookName: `Book Name number 2`,
      author: `Author2`,
      imageUrl: `https://picsum.photos/id/21/200/300`,
      plot: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
      id: `3`,
      bookName: `Book Name number 3`,
      author: `Author3`,
      imageUrl: `https://picsum.photos/id/30/200/300`,
      plot: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop 
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }
  ];
} else {
  let getBooksString = localStorage.getItem(`books`);
  booksStructure = JSON.parse(getBooksString);
}

let stringifyBooks = JSON.stringify(booksStructure);

localStorage.setItem(`books`, stringifyBooks);
