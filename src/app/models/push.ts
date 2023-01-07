interface NotificationPerMonth {
    month: String
    year: String,
    count: String
}

export interface NotificationsResults {
    users_which_didnt_started_any_course: String
    all_notifications_sent: String
    users_which_accepted_and_received_ntf: String
    users_which_started_courses_after_ntf: String
}

export interface Push {
    notificationsPerMonth: NotificationPerMonth[],
    usersNotifiedPerMonth: NotificationPerMonth[],
    notificationsData: NotificationsResults
}