// Rewrite the "switch" int an "if"

let browser = "Chrome";

if(browser == 'Edge'){
    console.log("You've got the edge");
}

else if(browser =='Chrome' || browser =='Firefox' || browser == 'Safari'){
    console.log( 'Okay we support these browsers too' );
}

else{
    console.log("Default");
}

