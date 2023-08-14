var config = {
    // You can have any number of sentences, from ten to twenty sentences are all fine
    // Try to keep each sentence under 15 characters, or the display might not be optimal
    texts: [
        "To my",
        "beloved Shreyas,",
        "Today is your birthday,",
        "This marks the",
        "first birthday on which we are meeting!",
        "You don't know me and I don't know you but,",
        "since we share the same name, we just became friends!",
        "Happy Birthday from my side!",
        "Stay happy and stay blessed.",
        "Have fun today machaaa!",
        "😃😃",
    ],
    /**
     * You can leave 'imgs' empty, but if you want to fill it in, follow the format below
     * "Corresponding to the above text, must be identical": "Image address, you can place the image in the 'imgs' folder"
     * For example:
     * "beloved sweetheart": "./imgs/xiaokeai.jpg"
     *
     * If you don't want images, just add double slashes at the beginning of the line as a comment, like the image for "Today is your birthday" won't be displayed :)
     * Tip: Images should preferably be square or close to square for better visual effect
     */
    imgs: {
        // "beloved sweetheart": "./imgs/xiaokeai.png",
        // "Today is your birthday": "./imgs/birthday.jpg",
    },
    // Button text descriptions, the following are the default English button texts; you can change them to your preferred words
    desc: {
        turn_on: "Start",
        play: "Music",
        bannar_coming: "Colors",
        balloons_flying: "Seems like something's missing",
        cake_fadein: "Cake?",
        light_candle: "Candles?",
        wish_message: "Happy Birthday",
        story: "A MESSAGE FOR YOU",
    }
};
