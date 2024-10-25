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
        name: `${edition.year}/${edition.semester} - ${getClassNames(edition, classesInfo).join(', ')}`,
        description: formatEditionDescription(edition),
        route: `/editions/${edition.id}`,
        img: `data:image/jpeg;base64,${edition.photo_base64_code}`,
        year: edition.year,
        start_date: edition.start_date,
        finish_date: edition.finish_date
    }))
}

export const formattedDate = (date) => {
  const rawDate = new Date(date);
  return new Intl.DateTimeFormat("pt-BR").format(rawDate);
};


export const parseDate = (formattedDate) => {
  const [day, month, year] = formattedDate.split('/');
  return new Date(`${year}-${month}-${day}`);
};

