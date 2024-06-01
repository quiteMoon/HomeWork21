// Task 1
/*
class PrintMachine {
    constructor(fontSize, fontColor, fontFamily) {
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
    }

    print(text) {
        document.write(`
            <p style="font-size: ${this.fontSize}; color: ${this.fontColor}; font-family: ${this.fontFamily};">
                ${text}
            </p>
        `);
    }
}

const printer = new PrintMachine("20px", "red", "Arial");

printer.print("Це тестовий текст, надрукований із використанням PrintMachine.");
*/

// Task 2
/*class News {
    constructor(title, text, tags, publicationDate) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publicationDate = new Date(publicationDate);
    }

    print() {
        const now = new Date();
        const diffInMs = now - this.publicationDate;
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        let displayDate;

        if (diffInDays < 1) {
            displayDate = 'сьогодні';
        } else if (diffInDays < 7) {
            displayDate = `${diffInDays} днів тому`;
        } else {
            const day = this.publicationDate.getDate();
            const month = this.publicationDate.getMonth() + 1;
            const year = this.publicationDate.getFullYear();
            displayDate = `${day}.${month}.${year}`;
        }

        document.write(`
            <h1>${this.title}</h1>
            <p><strong>Published:</strong> ${displayDate}</p>
            <p>${this.text}</p>
            <p>${this.tags.join(', ')}</p>

        `);
    }
}

const news = new News(
    "What is Lorem Ipsum?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, blanditiis, rem. Quaerat, ut! Sint alias, eaque quasi quam, exercitationem quia. Maxime quasi, placeat reprehenderit fuga eveniet ipsam qui alias mollitia earum repudiandae. Architecto amet optio placeat illum eveniet odit nesciunt illo, sequi, iure tempore repudiandae officia nisi. Omnis dolor alias ex, optio cum pariatur, temporibus nesciunt exercitationem? Eos aut saepe debitis molestias fuga modi tenetur. Animi quis, laborum. Ducimus minus facere dolorem dolores laboriosam repellendus suscipit incidunt accusantium blanditiis perferendis eligendi cupiditate culpa dolorum, vel omnis, praesentium quidem sit nobis veniam dignissimos iure. Delectus rem animi tenetur molestiae iure alias unde ducimus architecto sed. Ex eius dolores doloribus repellat. Fugit quidem pariatur dolore, labore adipisci suscipit libero consequuntur, fuga earum eligendi beatae error quos nobis, magnam sed! Nam perspiciatis exercitationem ad iusto doloribus, temporibus corporis, ut praesentium in. Ducimus cupiditate magnam maxime dolor asperiores autem fugiat quibusdam, molestias, nostrum quae, dolore aliquam tempora, dolorum temporibus libero id et deleniti officiis sit. Voluptatum natus nesciunt, aut cumque ullam asperiores totam magni, quae quod enim porro dolor quasi laborum fuga doloremque, blanditiis eos, iure molestias nostrum maiores voluptate. Repudiandae autem, eos, voluptas esse eveniet mollitia modi itaque soluta tenetur vero ex officia.",
    ["#lorem", "#ipsum", "#text"],
    "2024-05-30"
);

news.print();*/

// Task 3
/*
class News {
    constructor(title, text, tags, publicationDate) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publicationDate = new Date(publicationDate);
    }

    print() {
        const now = new Date();
        const diffInMs = now - this.publicationDate;
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        let displayDate;

        if (diffInDays < 1) {
            displayDate = 'сьогодні';
        } else if (diffInDays < 7) {
            displayDate = `${diffInDays} днів тому`;
        } else {
            const day = this.publicationDate.getDate();
            const month = this.publicationDate.getMonth() + 1;
            const year = this.publicationDate.getFullYear();
            displayDate = `${day}.${month}.${year}`;
        }

        document.write(`
            <h1>${this.title}</h1>
            <p>${this.text}</p>
            <p><strong>Tags:</strong> ${this.tags.join(', ')}</p>
            <p><strong>Published:</strong> ${displayDate}</p>
        `);
    }
}

class NewsFeed {
    constructor() {
        this.newsArray = [];
    }

    get newsCount() {
        return this.newsArray.length;
    }

    addNews(news) {
        this.newsArray.push(news);
    }

    removeNews(index) {
        if (index >= 0 && index < this.newsArray.length) {
            this.newsArray.splice(index, 1);
        }
    }

    displayAllNews() {
        document.write("<h2>All News:</h2>");
        this.newsArray.forEach(news => news.print());
    }

    sortNewsByDate() {
        this.newsArray.sort((a, b) => b.publicationDate - a.publicationDate);
    }

    searchNewsByTag(tag) {
        return this.newsArray.filter(news => news.tags.includes(tag));
    }
}

const news1 = new News(
    "What is Lorem Ipsum?",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    ["#lorem", "#ipsum", "#text"],
    "2024-05-30"
);

const news2 = new News(
    "Another News Title",
    "This is the text for another news article...",
    ["#news", "#update"],
    "2024-05-25"
);

const newsFeed = new NewsFeed();
newsFeed.addNews(news1);
newsFeed.addNews(news2);

document.write("<h2>Initial News Feed:</h2>");
newsFeed.displayAllNews();

newsFeed.sortNewsByDate();
document.write("<h2>Sorted News Feed:</h2>");
newsFeed.displayAllNews();

const searchResults = newsFeed.searchNewsByTag("#lorem");
document.write("<h2>Search Results for tag #lorem:</h2>");
searchResults.forEach(news => news.print());

newsFeed.removeNews(0);
document.write("<h2>News Feed after removing first news:</h2>");
newsFeed.displayAllNews();

document.write(`<h2>Total number of news: ${newsFeed.newsCount}</h2>`);
*/
