// src/index.js

/**
 * Fetches a random activity from the API and updates the HTML.
 * @returns {Promise<void>}
 */
async function getRandomActivity() {
    try {
        const response = await fetch('https://apis.scrimba.com/bored/api/activity');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('activity').innerText = data.activity;
    } catch (error) {
        document.getElementById('activity').innerText = "К сожалению, произошла ошибка";
        console.error('Error fetching the activity:', error);
    }
}
/**
 * Fetches a random activity from the API and updates the HTML.
 */
function getRandomActivityWithoutAsyncAndAwais() {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => { 
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('activity').innerText = data.activity;
        })
        .catch(error => {
            document.getElementById('activity').innerText = "К сожалению, произошла ошибка";
            console.error('Error fetching the activity:', error);
        });
}
/**
 * Updates the activity every minute.
 */
function updateActivity() {
    setInterval(getRandomActivity, 60000); // 60000ms = 1 minute
}
function updateActivityWithoutAsyncAndAwais() {
    setInterval( getRandomActivityWithoutAsyncAndAwais(), 60000); // 60000ms = 1 minute
}
// Initialize the first activity fetch
//document.addEventListener('DOMContentLoaded', updateActivity);
document.addEventListener('DOMContentLoaded', updateActivityWithoutAsyncAndAwais);
