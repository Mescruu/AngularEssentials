export interface Task {
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string,
}

/**
 * Dodatkowy interface dla danych z formularza
 */
export interface TaskData {
    title: string,
    summary: string,
    date: string,
}
