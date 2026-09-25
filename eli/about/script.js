const picturePairs = [
{
    normal: "pictures/1.jpg",
    hover: "pictures/1mod.jpg"
},
{
    normal: "pictures/2.jpg",
    hover: "pictures/2mod.jpg"
},
{
    normal: "pictures/3.jpg",
    hover: "pictures/3mod.jpg"
},
{
    normal: "pictures/4.jpg",
    hover: "pictures/4mod.jpg"
},
{
    normal: "pictures/5.jpg",
    hover: "pictures/5mod.jpg"
},
{
    normal: "pictures/7.png",
    hover: "pictures/7mod.png"
},
{
    normal: "pictures/8.jpg",
    hover: "pictures/8mod.jpg"
},
{
    normal: "pictures/9.jpg",
    hover: "pictures/9mod.jpg"
},
{
    normal: "pictures/10.jpg",
    hover: "pictures/10mod.jpg"
},
{
    normal: "pictures/11.jpg",
    hover: "pictures/11mod.jpg"
},
{
    normal: "pictures/6.jpg",
    hover: "pictures/6mod.jpg"
}
];

// Pick one pair when the page loads.
const selected = picturePairs[
Math.floor(Math.random() * picturePairs.length)
];

const image = document.getElementById("random-picture");

// Start loading the alternate image before the user hovers.
const preload = new Image();
preload.src = selected.hover;

// Initially display the normal image.
image.src = selected.normal;
image.alt = selected.normalAlt;

// Switch to this image's specific partner on hover.
image.addEventListener("mouseenter", () => {
image.src = selected.hover;
image.alt = selected.hoverAlt;
});

// Restore the original image when the mouse leaves.
image.addEventListener("mouseleave", () => {
image.src = selected.normal;
image.alt = selected.normalAlt;
});