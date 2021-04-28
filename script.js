(() => {
    const baseURL = 'https://robohash.org/';

    const htmlElements = {
        seed: () => document.querySelector('input[type="seed"]'),
        type: () => document.querySelector('#avatarType'),
        background: () => document.querySelector('#avatarBackground'),
        width: () => document.querySelector('input[type="width"]'),
        height: () => document.querySelector('input[type="height"]'),
        extension: () => document.querySelector('#imgExtension'),
        avatarImg: () => document.querySelector('#avatarImage'),
        outputLink: () => document.querySelector('#outputLink'),
        generateBtn: () => document.querySelector('#generateAvatar')
    };

    htmlElements['generateBtn']().addEventListener('click', generateAvatar);
    
    
    function generateAvatar(e){
        let { seed, type, background, size, extension } = getUserInputs();
        
        // Random avatar on click if no seed
        if (seed === '') seed = Math.round(Math.random() * 1000)

        const imageURL = `${baseURL}${seed}${type}&${background}`;
        htmlElements['avatarImg']().src = imageURL;

        console.log(imageURL);

        const displayURL = `${imageURL}?${size.width}x${size.height}${extension}`;
        htmlElements['outputLink']().innerHTML = displayURL;
        htmlElements['outputLink']().href = displayURL;
    }

    function getUserInputs(){
        return {
            seed: htmlElements['seed']().value,
            type: htmlElements['type']().value,
            background: htmlElements['background']().value,
            size: {
                width: htmlElements['width']().value,
                height: htmlElements['height']().value
            },
            extension: htmlElements['extension']().value
        }
    }

   
})();