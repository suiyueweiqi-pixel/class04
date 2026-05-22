const photo = document.querySelector("#photo"); // ← 画像を取得
const fibtn = document.getElementById("FiBtn"); // ボタン取得
const fobtn = document.getElementById("FoBtn")

const keyframes = {
    opacity: [0, 1],
    translate: [0,"150px 150px"]
};
const keyframesOut = {
    opacity: [1,0],
    translate: ["150px 150px","0px 0px"]
};

const option = {
    duration: 1000,
    fill: "forwards"
};
fibtn.onclick = () => {
    photo.animate(keyframes, option);
};
fobtn.onclick = () => {
    photo.animate(keyframesOut, option);
};
