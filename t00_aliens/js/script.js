let name = prompt("Enter the name of the species"),
    leader = prompt("Enter the name of the leader of the aliens"), 
    resources = prompt("Enter what natural resources aliens have").split(","),
    resourceCount = resources.length,
    agenda = prompt("What a the goals and ideas of the aliens?"),
    isHostile = confirm("Aliens are hostile to humans? Yes or no");

// isHostile = (x = promt("Aliens are hostile to humans? Yes or no")) => {
//         if ( x == yes) return true;
//         };
// isHostile();
let alienSpecies = {
    name,
    leader,
    resources,
    resourceCount,
    agenda,
    isHostile,
}



alert(
    `Here's the alien species:
    name - ${alienSpecies.name}
    leader - ${alienSpecies.leader}
    resources - ${alienSpecies.resources.join(",")}
    resource count - ${alienSpecies.resourceCount}
    agenda - ${alienSpecies.agenda}
    is hostile - ${alienSpecies.isHostile}
    `
);


// The Ba`orian
// The Graet Kaijan of K`anbula
// sozellstone, Ke`qun, coal, caak
// 4
// They seek to colonize planets with water.
// true