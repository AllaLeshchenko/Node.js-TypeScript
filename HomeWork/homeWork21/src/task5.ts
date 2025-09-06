// task5 - Абстрактный класс Media
abstract class Media {
    abstract play(): void;
}

class Audio extends Media {
    play(): void {
        console.log("Playing audio");
    }
}

class Video extends Media {
    play(): void {
        console.log("Playing video");
    }
}

const playlist: Media[] = [
    new Audio(),
    new Video(),
    new Audio(),
    new Video()
];

playlist.forEach(media => media.play());


// for (const media of playlist) {
//     media.play();
// }
