// link : https://www.codewars.com/kata/58de08d376f875dbb40000f1

function premierLeagueStandings(teamStandings) {
    const firstTeam = teamStandings[1];
    console.log(`This is firstTeam: ${firstTeam}`)

    const otherTeams = Object.fromEntries(
    Object.entries(teamStandings).filter(([key, value]) => value !== firstTeam)
    );
    console.log(`This is otherTeams: ${otherTeams}`)
    
    const otherTeamsAlphabetical = Object.entries(otherTeams);
    console.log(`This is otherTeamsAlphabetical before sorting: ${otherTeamsAlphabetical}`)

    otherTeamsAlphabetical.sort((a,b) => a[1].localeCompare(b[1]));
    console.log(`This is otherTeamsAlphabetical after sorting: ${otherTeamsAlphabetical}`)
    
    let returnObject = {1:firstTeam};
    console.log(`This is returnObject: ${returnObject}`)
    
    for (let i=0; i<otherTeamsAlphabetical.length; i++) {
      returnObject[i+2] = otherTeamsAlphabetical[i][1];
    }

    console.log(`This is returnObject after for loop: ${returnObject}`)
    return returnObject;
  }

  premierLeagueStandings({2:'Arsenal', 3:'Accrington Stanley', 1:'Leeds United'});