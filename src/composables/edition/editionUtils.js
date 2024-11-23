import { ref } from 'vue'

export const getClassNames = (edition, classesInfo) => {
  const names = []

  const involvedClasses = edition.involved_classes

  for (const course of edition.courses) {
    const classes = classesInfo.filter((classInfo) => classInfo.course.id === course.id)
    const involvedClassesCourse = involvedClasses.filter(
      (involvedClass) => involvedClass.course.id === course.id
    )

    if (classes.length === involvedClassesCourse.length) {
      names.push(`${course.acronym}s`)
    }
  }

  edition.involved_classes.forEach((involvedClass) => {
    if (!names.includes(`${involvedClass.course.acronym}s`)) {
      const name = `${involvedClass.year}${involvedClass.course.acronym}`
      if (!names.includes(name)) {
        names.push(name)
      }
    }
  })

  return names
}

export const formatEditionDescription = (edition) => {
  const coursesList = edition.courses
    .map((course, index) => {
      if (index === edition.courses.length - 2) {
        return `${course.name} e `
      }
      return `${course.name}`
    })
    .join('')

  return `Edição do ${edition.semester}° semestre do ano de ${edition.year} com os cursos de ${coursesList}.`
}

export const prepareEditions = (editions, classesInfo) => {
  return editions.map((edition) => ({
    title: `${edition.year}/${edition.semester} - ${getClassNames(edition, classesInfo).join(', ')}`,
    description: formatEditionDescription(edition),
    route: `/editions/${edition.id}`,
    img: edition.photo_base64_code,
    year: edition.year
  }))
}

export const prepareEditionTitle = (edition) => {
  const courses = ref([])
  edition.courses.forEach((course) => {
    courses.value.push(`${course.acronym}s`)
  })
  return `${edition.year}/${edition.semester} - ${courses.value.join(', ')}`
}

export const prepareRanking = (rankings, teams, categories) => {
  const rankingsByCategory = {};

  const teamMap = teams.reduce((map, team) => {
    map[team.id] = team;
    return map;
  }, {});

  const categoryMap = categories.reduce((map, category) => {
    map[category.id] = category.name;
    return map;
  }, {});

  const validCategoryIds = new Set(categories.map((category) => category.id));

  rankings.forEach((ranking) => {
    const team = teamMap[ranking.team];
    const project = team?.project;
    console.log(team)

    if (project && validCategoryIds.has(project.category)) {
      const category = project.category;


      if (!rankingsByCategory[category]) {
        rankingsByCategory[category] = [];
      }

      rankingsByCategory[category].push({
        ranking,
        team,
        project,
      });
    }
  });
  console.log(rankingsByCategory)
  const sortedRankingsByCategory = Object.keys(rankingsByCategory)
    .sort((a, b) => a - b)
    .map((categoryId) => ({
      categoryName: categoryMap[categoryId] || `Category ${categoryId}`,
      rankings: rankingsByCategory[categoryId]
        .sort(
          (a, b) =>
            parseFloat(b.ranking.final_grade) - parseFloat(a.ranking.final_grade)
        )
        .map(({ ranking, team, project }) => ({
          ranking,
          team,
          project,
        })),
    }));
    console.log(sortedRankingsByCategory)
  return sortedRankingsByCategory;
};


export const filterWinnerTeams = (teams, rankings, editionId, projects) => {
  const rankingList = ref([])
  const teamsList = ref([])
  const teamsLinkProject = ref([])
  const podium = ref([])

  rankings.forEach((ranking) => {
    if (ranking.edition == editionId) {
      rankingList.value.push(ranking)
    }
  })

  rankingList.value.forEach((ranking) => {
    teams.forEach((team) => {
      if (team.id == ranking.team) {
        teamsList.value.push({ team: team, ranking: ranking })
      }
    })
  })

  teamsList.value.forEach((team) => {
    projects.forEach((project) => {
      if (team.team.project.id == project.team_id) {
        teamsLinkProject.value.push({ team: team, project: project })
      }
    })
  })

  podium.value = teamsLinkProject.value
    .sort((a, b) => a.team.ranking.classification - b.team.ranking.classification)
    .slice(0, 3)
    .map((item) => ({
      ...item,
      classification: item.team.ranking.classification
    }))
  return {
    podium
  }
}
