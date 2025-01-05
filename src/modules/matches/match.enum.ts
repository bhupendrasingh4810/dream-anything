export enum MatchStatus {
    SCHEDULED = 'Scheduled',      // The match is scheduled but not started yet.
    ONGOING = 'Ongoing',          // The match is currently in progress.
    COMPLETED = 'Completed',      // The match has finished.
    CANCELLED = 'Cancelled',      // The match was cancelled before or during the match. Can not be rescheduled.
    ABANDONED = 'Abandoned',      // The match was abandoned after starting due to unforeseen circumstances. Can be rescheduled.
}