const saturdayFun = function(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
    console.log ("This Saturday, I want to bathe my dog!");
};

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
    console.log ("go to the office");
};

function wrapAdjective(flair = "*"){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`;
    }
}
