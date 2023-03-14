// Code your solution in this file!

// calculate the distance in blocks from scubers headquarters

function distanceFromHqInBlocks(pickupLocation){
    const hqLocation = 42
    if(pickupLocation > hqLocation){
        return pickupLocation - hqLocation ;
    }else{
        return hqLocation - pickupLocation ;
    }

}
distanceFromHqInBlocks(50);

// calculates the distance in feet between two blocks

//calculate the distance in feet using distanceFromHqInBlocks function

function distanceFromHqInFeet(pickupLocation){
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock){
    const blockLength = 264;
    const distance = Math.abs(startBlock - endBlock) * blockLength;
    return distance;
}
distanceTravelledInFeet(50,30);


//calcultes fare price for the customer

function calculatesFarePrice(start, destination){
const distance = distanceTravelledInFeet(start,destination);
let fare = 0;

if (distance <= 400){
    fare = 0;
}else if(distance > 400 && distance <= 2000){
    fare = (distance -400) * 0.02;
}else if (distance > 2000 && distance <= 2500){
    fare = 25;
}else if (distance > 2500){
    fare = 'cannot travel that far';

}

return fare;

}


