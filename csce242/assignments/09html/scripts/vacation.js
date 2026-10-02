class Vacation {
    constructor(title, type, description, thingsToDo, image, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }

    get card() {
        const section = document.createElement("section");
        section.classList.add("vacation");

        section.appendChild(this.vacationTitle());
        section.appendChild(this.vacationType());
        section.appendChild(this.vacationImage());

        section.onclick = () => {
            this.showModal();
        };

        return section;
    }

    vacationTitle() {
        const h2 = document.createElement("h2");
        h2.textContent = this.title;

        return h2;
    }

    vacationType() {
        const p = document.createElement("p");
        p.textContent = `${this.type} Vacation`;
        
        return p;
    }

    vacationImage() {
        const img = document.createElement("img");
        img.src = `images/${this.image}`;
        img.alt = `Picture of ${this.title}`;

        return img;
    }

    showModal() {
        const modal = document.getElementById("vacation-modal");
        
        modal.innerHTML = "";

        const modalContent = document.createElement("div");
        modalContent.classList.add("w3-modal-content");
        modalContent.classList.add("vacation-modal-content");

        const closeButton = document.createElement("span");
        closeButton.innerHTML = "&times;";
        closeButton.classList.add("close-modal");

        closeButton.onclick = () => {
            modal.style.display = "none";
        };

        const modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");

        modalBody.appendChild(this.vacationMap());
        modalBody.appendChild(this.vacationInfo());

        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalBody);

        modal.appendChild(modalContent);

        modal.style.display = "block";
    }

    vacationMap() {
        const iframe = document.createElement("iframe");

        iframe.src = this.mapSrc;
        iframe.allowFullscreen = true;

        return iframe;
    }

    vacationInfo() {
        const info = document.createElement("div");
        info.classList.add("modal-info");

        const title = document.createElement("h2");
        title.textContent = this.title;

        const type = document.createElement("p");
        type.innerHTML = `<strong>Type:</strong> ${this.type}`;

        const description = document.createElement("p");
        description.innerHTML =
            `<strong>Description:</strong> ${this.description}`;

        const thingsToDo = document.createElement("p");
        thingsToDo.innerHTML =
            `<strong>Things To Do:</strong> ${this.thingsToDo}`;

        info.appendChild(title);
        info.appendChild(type);
        info.appendChild(description);
        info.appendChild(thingsToDo);

        return info;
    }
}

    const vacations = [];

    vacations.push(
        new Vacation(
            "Asheville",
            "Mountain",
            "Asheville is a city in western North Carolina's Blue Ridge Mountains.",
            "Visit the Biltmore, Estate, Going Downtown, Hiking",
            "asheville.jpg",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207789.13180721016!2d-82.56541444999999!3d35.5362825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598ca93c0f6f09%3A0x94ef31c106343a5d!2sAsheville%2C%20NC!5e0!3m2!1sen!2sus!4v1790910501056!5m2!1sen!2sus"
        )
    );

    vacations.push(
        new Vacation(
            "Boone",
            "Mountain",
            "Boone is a scenic college town located in the Blue Ridge Mountains of North Carolina.",
            "Go hiking, visit Appalachian State University, and explore Grandfather Mountain.",
            "Boone.jpg",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103017.01191257282!2d-81.74576995276998!3d36.20834925685596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850d12869945a65%3A0x6e0a346179f5a6e9!2sBoone%2C%20NC!5e0!3m2!1sen!2sus!4v1790913573703!5m2!1sen!2sus" 
        )
    );

    vacations.push(
        new Vacation(
            "Hot Springs",
            "Mountain",
            "Hot Springs is a small mountain town in North Carolina known for its natural hot springs and mountain scenery.",
            "Relax in the natural hot springs, hike the Appalachian Trail, and explore downtown.",
            "Hot Springs.jpg",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51713.24657699727!2d-82.87003582060058!3d35.89610746440943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a3218bdd5fedd%3A0x79a534f1577692ee!2sHot%20Springs%2C%20NC%2028743!5e0!3m2!1sen!2sus!4v1790913684255!5m2!1sen!2sus"
        )
    );

    vacations.push(
        new Vacation(
            "Table Rock",
            "Mountain",
            "Table Rock is a mountain destination in South Carolina known for its beautiful views and outdoor recreation.",
            "Hike the trails, have a picnic, and explore Table Rock State Park.",
            "Table Rock.jpg",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1654974.8926412298!2d-84.14836147718201!3d35.88888329593089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850b8b9fdfebc2f%3A0xd8c8e189b89c9adf!2sTable%20Rock%20Mountain!5e0!3m2!1sen!2sus!4v1790913779104!5m2!1sen!2sus"
        )
    );

    vacations.push(
        new Vacation(
            "Sunset Beach",
            "Beach",
            "Sunset Beach is a quiet coastal town in North Carolina known for its sandy beaches and beautiful sunsets.",
            "Watch the sunset, visit the pier, and explore the coastline.",
            "Sunset Beach.jpg",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52988.5646499147!2d-78.55940839907113!3d33.89518314306205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890082b0f127f05b%3A0xd1e58176f5ff4a78!2sSunset%20Beach%2C%20NC!5e0!3m2!1sen!2sus!4v1790913823585!5m2!1sen!2sus"
        )
    );

    vacations.push(
        new Vacation(
            "Edisto Beach",
            "Beach",
            "Edisto Beach is a peaceful coastal destination in South Carolina known for its natural beauty and relaxed atmosphere.",
            "Spend time on the beach, go biking, and visit Edisto Beach State Park.",
            "Edisto Beach.jpg",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26922.3054572768!2d-80.34175866209566!3d32.49172592214361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fc3ae2a89e0b85%3A0xa0f4cdb4a15e1fae!2sEdisto%20Beach%2C%20SC!5e0!3m2!1sen!2sus!4v1790913919836!5m2!1sen!2sus"
        )
    );

    vacations.push(
        new Vacation(
            "Oak Island",
            "Beach",
            "Oak Island is a coastal town in North Carolina with sandy beaches and a laid-back atmosphere.",
            "Swim at the beach, visit the Oak Island Lighthouse, and go fishing.",
            "Oak Island.jpg",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105908.19263074093!2d-78.22558908344688!3d33.950617099063514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8900a081b16e4cb3%3A0xb94fac3c2cceea73!2sOak%20Island%2C%20NC!5e0!3m2!1sen!2sus!4v1790913972669!5m2!1sen!2sus" 
        )
    );

    vacations.push(
        new Vacation(
            "Pawleys Island",
            "Beach",
            "Pawleys Island is a historic coastal community in South Carolina known for its beaches and peaceful scenery.",
            "Relax on the beach, go kayaking, and explore the island.",
            "Pawleys Island.jpg",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53279.92216053464!2d-79.16527200557667!3d33.423371190095466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8900310270ac82d3%3A0xb93d3315efe428d2!2sPawleys%20Island%2C%20SC!5e0!3m2!1sen!2sus!4v1790914021554!5m2!1sen!2sus"
        )
    );

    const vacationGallery = document.getElementById("vacations");

    vacations.forEach((vacation) => {
        vacationGallery.appendChild(vacation.card);
    });