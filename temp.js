
function diagMatchDisplay(diagBegin,diagEnd,diag1Begin,diag1End){

  if (diagMatches(diagBegin,diagEnd) !== undefined){
    return ("Match in diagonal with " + diagMatches(diagBegin,diagEnd) + 's matching' );
  }
  if (diag1Matches(diag1Begin,diag1End) !== undefined){
    return ("Match in diagonal with " + diag1Matches(diag1Begin,diag1End) + 's matching' );
  }
}
