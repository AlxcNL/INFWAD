interface AlbumInterface {
    artist_name: string;
    album_name: string;
}

interface ExtendedAlbum extends AlbumInterface {
    // Additional property
    album_year: number;
}

const album3: Album = {
    artist_name: "Adèle Castillon",
    album_name: "Plaisir Risque",
    album_year: 2023
};

const album4: AlbumInterface = {
    artist_name: "Lyna Mahyem",
    album_name: "Mon Âme"
};

