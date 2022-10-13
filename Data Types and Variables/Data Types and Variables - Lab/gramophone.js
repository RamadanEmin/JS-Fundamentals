function gramophone(band, album, song) {
    let albumName = '' + album;
    let bandName = `` + band;
    let songName = `` + song;
    let duration = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = Math.ceil(duration / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');