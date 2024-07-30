
    const num = document.querySelector("#num");
    const btn = document.querySelector("#gen");
    const result = document.querySelector("#result");
    const limit = document.querySelector(".limit");
    btn.addEventListener("click", () => {
        let l = limit.value;
        result.innerHTML = null;
        let n = num.value;
        console.log(n);
        for (let i = 1; i <= l; i++) {
            let a = `${n} x ${i} = ${n * i}<br>`;
            result.innerHTML += a;
            
        }
    })
