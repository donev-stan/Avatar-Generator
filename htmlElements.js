const htmlElements = {
    seed: () => document.querySelector('input[type="seed"]'),
    type: () => document.querySelector("#avatarType"),
    background: () => document.querySelector("#avatarBackground"),
    width: () => document.querySelector('input[type="width"]'),
    height: () => document.querySelector('input[type="height"]'),
    extension: () => document.querySelector("#imgExtension"),
    avatarImg: () => document.querySelector("#avatarImage"),
    outputLink: () => document.querySelector("#outputLink"),
    generateBtn: () => document.querySelector("#generateAvatar"),
    reGenerateBtn: () => document.querySelector("#reGenerateAvatar"),
    saveBtn: () => document.querySelector("#saveAvatar"),
    savedAvatarsTemplate: () => document.querySelector("#savedAvatars-template"),
    savedAvatars: () => document.querySelector("#savedAvatars"),
    deleteAvatarBtn: () => document.querySelector("#deleteAvatar"),
};

// export default htmlElements; 