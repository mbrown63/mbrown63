const beaches = {
    "Myrtle Beach": "https://www.google.com/maps?q=Myrtle+Beach+South+Carolina&output=embed",
    "Miami Beach": "https://www.google.com/maps?q=Miami+Beach+Florida&output=embed",
    "Virginia Beach": "https://www.google.com/maps?q=Virginia+Beach+Virginia&output=embed",
    "Daytona Beach": "https://www.google.com/maps?q=Daytona+Beach+Florida&output=embed"
};

const mountains = {
    "Asheville": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103841.18190825176!2d-82.54103853447265!3d35.57748018005396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598ca93c0f6f09%3A0x94ef31c106343a5d!2sAsheville%2C%20NC!5e0!3m2!1sen!2sus!4v1790540707577!5m2!1sen!2sus",
    "Boone": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51508.48736764181!2d-81.66336795!3d36.208377500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850d12869945a65%3A0x6e0a346179f5a6e9!2sBoone%2C%20NC!5e0!3m2!1sen!2sus!4v1790540732554!5m2!1sen!2sus",
    "Hot Springs": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25856.62099047868!2d-82.82883595!3d35.896114499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a3218bdd5fedd%3A0x79a534f1577692ee!2sHot%20Springs%2C%20NC%2028743!5e0!3m2!1sen!2sus!4v1790540766610!5m2!1sen!2sus",
    "Table Rock": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.7989720539636!2d-82.71055539999999!3d35.0367587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859b2fba48b5bfb%3A0x4949a3b421298dbc!2sTable%20Rock%20State%20Park!5e0!3m2!1sen!2sus!4v1790540837255!5m2!1sen!2sus"
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
    } else if(destinationType == "mountains") {
        destinations = mountains;
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