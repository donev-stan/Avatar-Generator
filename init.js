// import htmlElements from "./htmlElements.js";
// import { generateAvatar, saveAvatar, renderSavedAvatars } from './avatarActions.js';

(() => {
    htmlElements["generateBtn"]().addEventListener("click", generateAvatar);
    htmlElements["saveBtn"]().addEventListener("click", saveAvatar);
    htmlElements["reGenerateBtn"]().addEventListener("click", generateAvatar);

    let seed = "avatar";
    let avatarID = "https://robohash.org/avatar";
    let avatarImageURL = "https://robohash.org/avatar";

    localStorage.setItem(
        avatarID,
        JSON.stringify({
            linkID: avatarID,
            seed: seed,
            imageURL: avatarImageURL,
        })
    );

    renderSavedAvatars();
})();