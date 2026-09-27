const beaches = {
    "Myrtle Beach": "https://www.google.com/maps?q=Myrtle+Beach+South+Carolina&output=embed",
    "Miami Beach": "https://www.google.com/maps?q=Miami+Beach+Florida&output=embed",
    "Virginia Beach": "https://www.google.com/maps?q=Virginia+Beach+Virginia&output=embed",
    "Daytona Beach": "https://www.google.com/maps?q=Daytona+Beach+Florida&output=embed"
};

const parks = {
    "Carowinds": "https://www.google.com/maps?q=Carowinds&output=embed",
    "Walt Disney World": "https://www.google.com/maps?q=Walt+Disney+World&output=embed",
    "Universal Orlando Resort": "https://www.google.com/maps?q=Universal+Orlando+Resort&output=embed",
    "Six Flags Over Georgia": "https://www.google.com/maps?q=Six+Flags+Over+Georgia&output=embed"
};

const showDestinations = () => {
    const destinationType = document.getElementById("destination-type").value;
    const destinationLinks = document.getElementById("destination-links");
    const map = document.getElementById("map");

    destinationLinks.innerHTML = "";
    map.innerHTML = "";

    let destinations;

    if(destinationType == "beaches") {
        destinations = beaches;
    } else if(destinationType == "parks") {
        destinations = parks;
    } else {
        return;
    }

    for(let destination in destinations) {
        const link = document.createElement("a");
        link.innerHTML = destination;
        link.href = "#";

        link.onclick = (e) => {
            e.preventDefault();
            showMap(destinations[destination]);
        };

        destinationLinks.append(link);
    }
};

const showMap = (location) => {
    const map = document.getElementById("map");

    map.innerHTML = `
        <iframe
            src="${location}"
            width="500"
            height="500"
            style="border:0;"
            loading="lazy">
        </iframe>
    `;
};

document.getElementById("destination-type").onchange = showDestinations;