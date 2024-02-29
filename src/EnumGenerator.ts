

export const enumGenerator = (startingVal: number = 0) => {

    let number = startingVal;


    return () => number++;

}

export const idGenerator = enumGenerator()