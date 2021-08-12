export const dummyOutput = (input: string) => {
    return input + input
}

export const primeCollector = (input: number) => {
    
    if(input == 1) return [];
    
    let n = input;
    let l = [];
    for(let i=2;i<=n;i++){
        while(input % i === 0){
            l.push(i);
            input = input / i;
        }
    }

    return l;
}

export const stoneGame = (n: number, a: number[]) => {
    let f=0,l=0,x;
    for(let i=0;i< a.length; i++){
        if(i == 1) f = i + 1;
        if(i == n) l = i + 1;
    }

    if(f > l){
        let e = f;
        f = l;
        l = e;
    }

    return Math.min(
        f + n - l + 1,
        l,
        n - f + 1
    );
}