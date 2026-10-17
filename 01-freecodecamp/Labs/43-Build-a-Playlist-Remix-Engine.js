const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(userPlaylists) {
  let result = [];
  if (!Array.isArray(userPlaylists)) return [];
  for (const [playlistIndex, playlist] of userPlaylists.entries()) {
    for (const [trackIndex, track] of playlist.entries()) {
      track["source"] = [playlistIndex, trackIndex];
      result.push(track);
    }
  }
  return result;
}

function scoreTracks(flatPlaylists) {
  let result = [];
  for (let flatPlaylist of flatPlaylists) {
    flatPlaylist["score"] =
      flatPlaylist["votes"] * 10 - Math.abs(flatPlaylist["bpm"] - 120);
    result.push(flatPlaylist);
  }
  return result;
}

function dedupeTracks(scoredTracks) {
  let dedupedScoredTracks = [];
  let accuScoredTracksId = [];
  for (let scoredTrack of scoredTracks) {
    if (!accuScoredTracksId.includes(scoredTrack["trackId"])) {
      accuScoredTracksId.push(scoredTrack["trackId"]);
      dedupedScoredTracks.push(scoredTrack);
    }
  }
  return dedupedScoredTracks;
}

function enforceArtistQuota(dedupedTracks, artistQuota) {
  let result = [];
  let accuArtists = {};
  for (let dedupedTrack of dedupedTracks) {
    if (!Object.hasOwn(accuArtists, dedupedTrack["artist"])) {
      accuArtists[dedupedTrack["artist"]] =
        (accuArtists[dedupedTrack["artist"]] || 0) + 1;
      //If it's undefined, fall back to 0.
    } else {
      accuArtists[dedupedTrack["artist"]]++;
    }
    if (accuArtists[dedupedTrack["artist"]] <= artistQuota) {
      result.push(dedupedTrack);
    }
  }
  return result;
}

function buildSchedule(enforcedArtistQuota) {
  let result = [];
  let slot = 1;
  for (let track of enforcedArtistQuota) {
    result.push({ slot, trackId: track["trackId"] });
    slot++;
  }
  return result;
}

function remixPlaylist(playlists, maxOcuurencesArtist) {
  let flatPlaylists = flattenPlaylists(playlists);
  let scoredTracks = scoreTracks(flatPlaylists);
  let dedupedTracks = dedupeTracks(scoredTracks);
  let enforcedArtistQuota = enforceArtistQuota(
    dedupedTracks,
    maxOcuurencesArtist,
  );
  let buildedSchedule = buildSchedule(enforcedArtistQuota);
  return buildedSchedule;
}

console.log(remixPlaylist(playlists, 1));
