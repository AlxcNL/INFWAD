function highlight(word) {
    // Output color using ANSI escape codes
    return `\x1b[36m${word}\x1b[0m`;
}

const singer = {
    "_id": "zaho",
    "lyrics_url": "https://lyricstranslate.com/en/zaho-lyrics.html",
    "languages": [
        "Arabic",
        "French",
        "Spanish"
    ],
    "artist_name": "Zaho",
    "country": [
        "Algeria",
        "Canada"
    ],
    "style": "R&B/Soul"
}

// Object destructuring
const {artist_name, languages, country} = singer;

console.log( `Singer ${highlight(artist_name)} lives in ${highlight(country[1])} and speaks ${highlight(languages[1])}` )

