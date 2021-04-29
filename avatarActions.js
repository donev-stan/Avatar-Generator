// import htmlElements from "./htmlElements.js";

const baseURL = "https://robohash.org";

function generateAvatar(e) {
    let { seed, type, background, size, extension } = getUserInputs(e);

    avatarID = `${baseURL}/${type}${
        background !== "" ? `/${background}/` : "/"
    }${seed}?size=${size.width}x${size.height}`;

    avatarImageURL = `${baseURL}/${type}${
        background !== "" ? `/${background}/` : "/"
    }${seed}`;

    htmlElements["avatarImg"]().src = avatarImageURL;
    htmlElements["outputLink"]().innerHTML = avatarID;
    htmlElements["outputLink"]().href = avatarID;
}

function saveAvatar(e) {
    localStorage.setItem(
        avatarID,
        JSON.stringify({
            linkID: avatarID,
            seed: seed,
            imageURL: avatarImageURL,
        })
    );

    renderSavedAvatars();
}

function renderSavedAvatars() {
    const avatars = [];

    Object.keys(localStorage).forEach((key) =>
        avatars.push(JSON.parse(localStorage.getItem(key)))
    );

    fetch("./savedAvatars.hbs")
        .then((response) => response.text())
        .then((templateSource) => {
            const template = Handlebars.compile(templateSource);
            htmlElements["savedAvatars"]().innerHTML = template({avatars});
            // htmlElements["deleteAvatarBtn"]().addEventListener("click", (e) => {
            //     const advatarID = e.target.dataset.avatarid;
            //     localStorage.removeItem(advatarID);
            //     console.log(advatarID);
            //     renderSavedAvatars();
            // });
        });
}


// Helper function
function getUserInputs(e) {
    if (e.target.id === "generateAvatar") {
        seed = htmlElements["seed"]().value;

        // Random avatar on click if no seed
        if (seed === "") {
            seed = Math.round(Math.random() * 10000);
            htmlElements["seed"]().placeholder = seed;
        }
    } // else it's regenerate avatar

    return {
        seed,
        type: htmlElements["type"]().value,
        background: htmlElements["background"]().value,
        size: {
            width: htmlElements["width"]().value,
            height: htmlElements["height"]().value,
        },
        extension: htmlElements["extension"]().value,
    };
}

// export { generateAvatar, saveAvatar, renderSavedAvatars };