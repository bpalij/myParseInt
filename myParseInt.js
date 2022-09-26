function oneLengthStrToNum (str) {
  const oneLengthStrToNumObj = {
    '1':1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '0':0,
  }
  const num = oneLengthStrToNumObj[str];
  if (num === undefined) {
    throw new Error('Incorrect ' + str);
  }
  return num;
}

function myParseInt (str) {
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    answer = answer * 10 + oneStrToNum(str[i]);
  }
  return answer;
}

console.log(myParseInt('123') + 2);
