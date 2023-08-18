// timer - счетчик акций

    const timeEnd = "2023-08-31 15:15"; 
    function getTimeRemaning(endtime){  
        const t = Date.parse(endtime) - Date.parse (new Date()),
                days = Math.floor(t/(1000*60*60*24)),
                hours = Math.floor((t/(1000*60*60))%24),
                minutes = Math.floor((t/(1000*60))%60), 
                seconds = Math.floor((t/1000)%60);
        return{
            'total':t,
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        }
    }

    function setClock(selector,endtime){
        const countdown = document.querySelector(selector), // в этом проекте timer называется countdown (нашла название в коде)
            days = countdown.querySelector('.days'), // т.к. в коде написано, что days... - это class, то ставим . перед days, а не # (для id) заходим в определенный таймер и хватаем класс. Т.к. не ко всему документу, а только в таймере, то заходим в таймер и там хватаем класс days
            hours = countdown.querySelector('.hours'),
            minutes = countdown.querySelector('.minutes'),
            seconds = countdown.querySelector('.seconds');
            timeInterval = setInterval (updateСlock,1000);
       
        function updateСlock(){
            const t = getTimeRemaning(endtime) // Теперь в переменной t лежит вся функция getTimeRemaning (1я функция). Это другая переменная t (не из предыдущего блока), т.к. в другой функции прописана
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
            if(t.total <=0){
                clearInterval(timeInterval); // clearInterval метод обнуления
            days.innerHTML = '00';
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
            }
        }
    }
    setClock('.countdown',timeEnd);