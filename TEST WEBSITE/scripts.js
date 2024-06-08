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
        angry: ['Kanino ka galit? Sasakalin natin sila!', 'Yaan mo sila, di natin sila bati.', 'Sumbong mo saken, yari yan.'],
        sad: ['Ice cream is key.', 'Wawawa ulit. AHAHAH', 'Read?'],
        lonely: ['Binge watch >>', 'Ihh wawawa', 'Talk to someone??'],
        happy: ['Keep on Smiling :)', 'Yieeee', 'Luh happy']
    };

    const flowerImagesNew = {
        rose: 'images/rose_new.jpg',
        tulip: 'images/tulip_new.jpg',
        lavender: 'images/lavender_new.jpg'
    };

    const randomIndex = Math.floor(Math.random() * quotes[emotion].length);

    document.getElementById('emotion-section').style.display = 'none';
    document.getElementById('selected-flower').src = flowerImages[selectedFlower];
    document.getElementById('quote').textContent = quotes[emotion][randomIndex];
    document.getElementById('result-section').style.display = 'block';

    // Change the displayed image based on the selected flower
    document.getElementById('selected-flower').src = flowerImagesNew[selectedFlower];
}
