//Use http://jsonlint.com/  to validate the code. 
var grungeAlbums = {
  "albums":[
    {
        "name": "Bleach",
        "artist": "Nirvana",
        "unitsSold": 1700000
    },
    {
        "name": "Nevermind",
        "artist": "Nirvana",
        "unitsSold": 30000000
    },
    {
        "name": "In Utero",
        "artist": "Nirvana",
        "unitsSold": 15000000
    },
    {
        "name": "Ten",
        "artist": "Pearl Jam",
        "unitsSold": 10000000
    },
    {
        "name": "Vs",
        "artist": "Pearl Jam",
        "unitsSold": 6100000
    },
    {
        "name": "Vitalogy",
        "artist": "Pearl Jam",
        "unitsSold": 4770000
    }
  ]
};

var grungeAlbumsJSON = JSON.stringify(grungeAlbums);
var grungeAlbumsObject = JSON.parse(grungeAlbumsJSON);

//console.log(grungeAlbumsJSON);
//console.log(grungeAlbumsObject);

// took me a bit to realize we were looping through the albums array of objects within the grungeAlbums object. 
// could we call .albums.length or no? this is why we need [] notation
for(var i=0; i< grungeAlbumsObject.albums.length; i++){
  var currentAlbum = grungeAlbumsObject.albums[i];
  console.log('Album: ' + currentAlbum.name);
  console.log('Artist: ' + currentAlbum.artist);
  console.log('Units sold: ' + currentAlbum.unitsSold);
}
