
const hasDriverLicense = false; //A
const hasGoodVision = true; //B
console.log ( hasDriverLicense && hasGoodVision);
console.log (hasDriverLicense || hasGoodVision);
console.log (!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if ( !hasDriverLicense && hasGoodVision) {
   console.log ('Sarah is able to drive');
}
else {
   console.log("Someone else should drive...");

}

