
        // آرایه اعداد
        const numbers = [1, 5, 10, 20, 35];

        // تابع برای نمایش عدد تصادفی
        function showRandomNumber() {
            // انتخاب یک عدد تصادفی از آرایه
            const randomIndex = Math.floor(Math.random() * numbers.length);
            const randomNum = numbers[randomIndex];

            // نمایش لودینگ
            const loadingElement = document.getElementById('loading');
            loadingElement.style.display = 'block';

            // صبر به مدت 2 ثانیه
            setTimeout(() => {
                // پنهان کردن لودینگ
                loadingElement.style.display = 'none';

                // نمایش عدد تصادفی در خروجی
                const outputElement = document.getElementById('output');
                outputElement.style.display = 'block';
                outputElement.textContent = randomNum;
            }, 2000);
        }

        // رویداد کلیک برای دکمه
        const button = document.getElementById('myButton');
        button.addEventListener('click', showRandomNumber);
    /*
<button id="myButton">یک عدد را نمایش بده</button>
    <p id="output"></p>
    <div id="loading">در حال بارگذاری...</div>
*/
