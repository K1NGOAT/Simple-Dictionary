// Dictionary object with words, parts of speech, and definitions
const dictionary = {
    grotesque: {
        partOfSpeech: "adjective",
        definitions: ["Comically or repulsively ugly or distorted."]
    },
    label: {
        partOfSpeech: "noun",
        definitions: ["A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
    },
    debacle: {
        partOfSpeech: "noun",
        definitions: ["A sudden and ignominious failure; a fiasco."]
    },
    yes: {
        partOfSpeech: "noun",
        definitions: ["Used to give an affirmative response."]
    },
    panacea: {
        partOfSpeech: "noun",
        definitions: ["An answer or solution for all problems or difficulties."]
    },
    concatenation: {
        partOfSpeech: "noun",
        definitions: ["A series of interconnected or interdependent things or events."]
    },
    saw: {
        partOfSpeech: "verb",
        definitions: ["Cut (something) using a saw.", "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."]
    },
    crane: {
        partOfSpeech: "verb",
        definitions: ["Stretch out one's body or neck in order to see something.", "Move (a heavy object) with a crane."]
    },
    minute: {
        partOfSpeech: "noun",
        definitions: ["A period of time equal to sixty seconds or a sixtieth of an hour."]
    }
};

// Function to search for a word in the dictionary
function searchWord() {
    const wordInput = document.getElementById("wordInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    // Check if the word exists in the dictionary
    if (dictionary.hasOwnProperty(wordInput)) {
        const wordData = dictionary[wordInput];
        const definitions = wordData.definitions.map((def, index) => `<li>${index + 1}. ${def}</li>`).join("");
        
        // Display the word with part of speech and definitions
        resultDiv.innerHTML = `
            <strong>${wordInput}</strong> (${wordData.partOfSpeech}):
            <ul>${definitions}</ul>
        `;
    } else {
        // Display message if word not found
        resultDiv.innerHTML = "Word not found in the dictionary.";
    }
}
