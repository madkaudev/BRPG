// Create objects of paths to image source files
const HeroImagePaths = {
    "Colt": "../../images/sprites/heroes/pngs/colt.png",
    "Derrick": "../../images/sprites/heroes/pngs/derrick.png",
    "Grammy": "../../images/sprites/heroes/pngs/grammy.png",
    "Pete": "../../images/sprites/heroes/pngs/pete.png",
    "Rook": "../../images/sprites/heroes/pngs/rook.png",
    "Sam": "../../images/sprites/heroes/pngs/sam.png"
};
const EnemyImagePaths = {
    "Goober": "../../images/sprites/enemies/pngs/goober.png",
    "MenacingMantis": "../../images/sprites/enemies/pngs/menacingMantis.png"
};
// Represents all image paths in use
//const ImagePaths = {...HeroImagePaths, ...EnemyImagePaths};

const PortraitImagePaths = {
    "Colt": "../../images/ui/pngs/coltPortrait.png",
    "Derrick": "../../images/ui/pngs/derrickPortrait.png",
    "Grammy": "../../images/ui/pngs/grammyPortrait.png",
    "Pete": "../../images/ui/pngs/petePortrait.png",
    "Rook": "../../images/ui/pngs/rookPortrait.png",
    "Sam": "../../images/ui/pngs/samPortrait.png"
};

// Create an object of character names mapped to image objects
function createImages(ImagePaths) {
    const Object = {};
    for (const Name in ImagePaths) {
        const Path = ImagePaths[Name];
        const ImageObject = new Image();
        ImageObject.src = Path;
        Object[Name] = ImageObject;
    }
    return Object;
}

// Export objects of images to load
export const HeroImages = createImages(HeroImagePaths);
export const EnemyImages = createImages(EnemyImagePaths);
export const PortraitImages = createImages(PortraitImagePaths)
export const Images = {...HeroImages, ...EnemyImages, ...PortraitImages};