// interface AudioPlayer {
//   audioVolume: number;
//   songDuration: number;
//   song: string;
//   details: Details;
// }

// interface Details { 
//   author: string
//   year: number
// }

// const audioPlayer: AudioPlayer = {
//   audioVolume: 90,
//   songDuration: 30,
//   song: "Mess",
//   details: {
//     author: 'Ed Sheeran',
//     year: 2020
//   }
// }

// const {song: anotherSong, details:{author}} = audioPlayer


const dbz: string[] = ['Goku', 'Vegeta'];

const [p1, p2, trunks = 'Not found'] = dbz;

console.log('Personaje 3: ', trunks);

export {};