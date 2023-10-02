// Code your solution in this file!
const returnFirstTwoDrivers = (driverList) => {
    return driverList.slice(0,2);
}

const returnLastTwoDrivers = (driverList) => {
    return driverList.slice(-2, driverList.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (factor) => {
    return (fare) => factor * fare;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverList,driverSelector) {
    return driverSelector(driverList)
}

