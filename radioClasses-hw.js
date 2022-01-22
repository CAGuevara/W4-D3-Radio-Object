
// Give it a property called stations and make the value an array of station objects

let radio = {
    radioName: 'wsb',
    stations: [{
        stationName: '99.5 The Bert ',
        songs: [
            {
                'artist': 'Beyonce',
                'song': 'Put a ring'
            },
            {
                'artist': 'Prince',
                'song': 'Purple Rain'
            },
            {
            'artist': 'Queen',
            'song': 'Somebody to Love'
            }
        ],
    },
        {
        stationName: 'Another RadioStation',
        songs: [
            {
                'artist': 'Michael Jackson',
                'song': 'Thriller'
            },
            {
                'artist': 'shakira',
                'song': 'Whatever Whenever'
            },
            {
                'artist': 'Tina Turner',
                'song': 'Whats Love got to do'
            }]
    }],
    
    // radio.stations[1].songs.push({artist : 'Mike',song : 'ThreeEra'})
    randomSong () {
        let i = Math.floor(Math.random()*2);
        let song = Math.floor(Math.random()*3);
        let Singer = radio.stations[i].songs[song].artist;
        let selectedSong = radio.stations[i].songs[song].song;
        let station = radio.stations[i].stationName;

        return  `Lets Listen to ${Singer} with ${selectedSong} in ${station}`;
        console.log(radio.stations[i].songs[song].song);
    }
}
console.log(radio.randomSong());

