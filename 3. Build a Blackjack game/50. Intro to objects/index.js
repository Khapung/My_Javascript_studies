// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}


// console.log( course.tags[0])

// console.log( course.tags[1])

// for ( let i = 0; i < course.tags.length; i++) {
//     console.log( course.tags[i] )
// }


for ( let tag of course.title ) {
    console.log( tag )
}
