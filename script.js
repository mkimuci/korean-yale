// script.js
function convertToRoman() {
    const input = document.getElementById('koreanInput').value;
    const output = romanizeKorean(input);
    document.getElementById('romanizedOutput').innerText = output;
}
Copy code
const basicMapping = {
    '가': 'ga',
    '나': 'na',
    // ... add more mappings
};

function romanizeKorean(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        output += basicMapping[char] || char; // If the character is not in the mapping, keep it unchanged
    }
    return output;
}