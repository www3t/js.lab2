/**
 * Получает случайную активность с API.
 * @returns {Promise<string>} Текст случайной активности.
 * @throws {Error} Если запрос завершился неудачно.
 */
// export async function getRandomActivity() {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//         if (!response.ok) {
//             throw new Error(`Could not fetch activity, status: ${response.status}`);
//         }

//         const data = await response.json();
//         const randomIndex = Math.floor(Math.random() * data.length)
//         const activityElement = document.getElementById('activity')
//         activityElement.textContent = data[randomIndex].title
//     } catch (error) {
//         console.error("Error"); // Вывод ошибки в консоль
//         throw error; // Повторное генерирование ошибки для обработки в вызывающем коде
//     }
// }

