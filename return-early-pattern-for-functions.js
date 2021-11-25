// Setup
function abTest(a, b) {
  if(a<0)
  return;
  if(b<0)
  return;
  else
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);