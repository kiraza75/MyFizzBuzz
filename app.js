const { fromEvent, interval } = rxjs;

const areaResult = document.querySelector("#app-area");
const areaTimer = document.querySelector("#app-timer");

count = 0;
const observable$ = fromEvent(window, 'click');


    observable$.subscribe(event => {
        count++;

    })

const seconds$ = interval(1000);

seconds$.subscribe(second => {
    areaTimer.innerHTML = second;
    if(count % 3 === 0 && count % 5 === 0 && count !== 0) {
        areaResult.innerHTML = "FizzBuzz";
    }
    else if (count % 3 === 0 && count !== 0) {
        areaResult.innerHTML = "Fizz";
    }
    else if(count % 5 === 0 && count !== 0) {
        areaResult.innerHTML = "Buzz";
    }
    else {
        areaResult.innerHTML = count;
    }
});


