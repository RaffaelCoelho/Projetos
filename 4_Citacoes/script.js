const quotes = [
    {
        quote: "A persitencia é o caminho do exito",
        author: "Charles Chaplin",
    },
    {
        quote: "A vida é aquilo que acontece enquanto você está ocupado fazendo outros planos",
        author: "John Lennon",
    },
    {
        quote: "Conhece-te a ti mesmo e conhecerás o universo e os deuses",
        author: "Sócrates",
    },
    {
        quote: "O que me preocupa não é o grito dos maus, mas o silêncio dos bons",
        author: "Martin Luther King Jr",
    },
    {
        quote: "Não existe caminho para a felicidade. A felicidade é o caminho.",
        author: "Thich Nhat Hanh",
    },
    {
        quote: "A imaginação é mais importante que o conhecimento.",
        author: "Albert Einstein",
    },
    {
        quote: "Seja a mudança que você deseja ver no mundo.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "As pessoas esquecerão o que você disse, esquecerão o que você fez, mas nunca esquecerão como você as fez sentir.",
        author: "Maya Angelou",
    },
    {
        quote: "A sorte favorece a mente bem preparada.",
        author: "Louis Pasteu",
    },
    {
        quote: "Nada é permanente, exceto a mudança.",
        author: "Heráclito",
    },
    {
        quote: "Coragem é resistência ao medo, domínio do medo, não ausência do medo.",
        author: "Mark Twain",
    },
];
const quoteBtn = document.querySelector(".quote")
const quoteText = document.querySelector(".text")
const quoteAuthor = document.querySelector(".author")

function getQuote(){
    const index = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent = quotes[index].author;
}

quoteBtn.addEventListener("click", getQuote);