let selectedFlower = '';

function selectFlower(flower) {
    selectedFlower = flower;
    document.querySelector('.flower-selection').style.display = 'none';
    document.getElementById('emotion-section').style.display = 'block';
}

function selectEmotion(emotion) {
    const flowerImages = {
        rose: 'images/rose.jpeg',
        tulip: 'images/tulip.jpeg',
        lavender: 'images/lavender.jpeg'
    };
    
    const quotes = {
        angry: [
            "kanino ka galet sasakalen naten",
            "Yaan mo sila di natin sila bati",
            "Sumbong mo saken yari yan"
        ],
        sad: [
            "ICE CREAM IS KEY",
            "wawaaa ulit AHAHAH",
            "Read??"
        ],
        lonely: [
            "Binge watch>>",
            "ihh wawaa",
            "Talk to someone??"
        ],
        happy: [
            "Keep on Smilin : ) ",
            "yieeeeee",
            "luh happyy"
        ]
    };

    const randomIndex = Math.floor(Math.random() * quotes[emotion].length);
    const randomQuote = quotes[emotion][randomIndex];

    document.getElementById('emotion-section').style.display = 'none';
    document.getElementById('selected-flower').src = flowerImages[selectedFlower];
    document.getElementById('quote').textContent = randomQuote;
    document.getElementById('result-section').style.display = 'block';
}
