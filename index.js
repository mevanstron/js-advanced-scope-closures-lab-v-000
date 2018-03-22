function produceDrivingRange (validDistance) {
  return function (startBlock, endBlock) {
    let tripDistance = parseInt(startBlock) - parseInt(endBlock);
    if (tripDistance < 0) {tripDistance *= -1;}
    let tripDelta = tripDistance - validDistance;
    if (tripDelta < 0) {tripDelta *= -1;}

    if (tripDistance > validDistance) {
        return `${tripDelta} blocks out of range`
    } else {
        return `within range by ${tripDelta}`
    }
  }
}

function produceTipCalculator (tipPercent) {
  return function (fare) {
    return fare * tipPercent;
  }
}
