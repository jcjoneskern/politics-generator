var peasant = ["well I didn't vote for you", "strange women lying in ponds is no basis for a system of government", "supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony", "you can't expect to wield supreme power just 'cause some watery tart threw a sword at you", "I mean, if I went around saying I was an emperor just because some moistened bint had lobbed a scimitar at me, they'd put me away", "ah, now we see the violence inherent in the system", "help, help, I'm being repressed"];
var quietude = ["Be quiet!", "I order you to be quiet!", "Shut up!", "Will you shut up!"];

exports.randomDennis = function() {
  return peasant[Math.floor(Math.random()*peasant.length)];
};

exports.randomArthur = function() {
  return quietude[Math.floor(Math.random()*quietude.length)];
};

exports.peasant = peasant;
exports.quietude = quietude;
