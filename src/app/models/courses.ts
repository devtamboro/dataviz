import { YearDateFormat } from "./dateFormat";


interface usersWhichFinishedPerMonth extends YearDateFormat {
    finished_courses: number
}

interface usersAndCourses {
    users_atleast_one_course: number 
    finished_courses: number
    progress_courses: number 
}

interface usersData {
    active_users: number
    enabled_users: number
}

export interface Courses {
    usersWhichFinished: usersWhichFinishedPerMonth
    usersAndCourses: usersAndCourses
    usersData: usersData
}
