function songs(input = []) {
    let numberOfSong = Number(input.shift());
    let selectedTypeList = input.pop();
    let tracks = [];
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    for (let i = 0; i < numberOfSong; i++) {
        let songData = input[i].split(`_`);
        let [typeList, name, time] = [songData[0], songData[1], songData[2]];
        tracks.push(new Song(typeList, name, time));
    }
    for (const track of tracks) {
        if (track.typeList === selectedTypeList || selectedTypeList === `all`)
            console.log(track.name);
    }
}
songs(
    [4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);