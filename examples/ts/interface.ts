interface Album {
    artist_name: string;
    album_name: string;
    // Additional property
    [key: string]: any;
}

const album1: Album = {
    artist_name: "Adèle Castillon",
    album_name: "Plaisir Risque",
    album_year: 2023
};

const album2: Album = {
    artist_name: "Lyna Mahyem",
    album_name: "Mon Âme"
};

