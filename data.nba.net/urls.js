const BASE = `data.nba.net`

const   CALENDAR = () =>  BASE + `/prod/v1/calendar.json`;
const   SCOREBOARD= (yyyymmdd) =>  BASE + `/prod/vconst/${yyyymmdd}/scoreboard.json`;
const   TEAMS= (yyyy) =>  BASE + `/prod/vconst/${yyyy}/teams.json`;
const   PLAYERS= (yyyy) =>  BASE + `/prod/v1/${yyyy}/players.json`;
const   ALLSTARS= (yyyy) =>  BASE + `/prod/v1/allstar/${yyyy}/AS_roster.json`;
const   COACHES= (yyyy) =>  BASE + `/prod/v1/${yyyy}/coaches.json`;
const   SCHEDULE= (yyyy) =>  BASE + `/prod/v1/${yyyy}/schedule.json`;
const   CONFERENCE_STANDINGS= () => BASE + `/prod/v1/current/standings_conferenc;.json`;
const   DIVISION_STANDINGS= () => BASE + `/prod/v1/current/standings_division.json`;
const   LEAGUE_STANDINGS= () => BASE + `/prod/v1/current/standings_all.json`;
const   LEAGUE_STANDINGS_MINI= () => BASE + `/prod/v1/current/standings_all_no_sort_keys.json`;
const   TEAMS_STATS_LEADERS= () => BASE + `/prod/v1/2018/team_stats_rankings.json`;
const   TEAMS_STATS_LAST_FIVE_GAMES= (yyyy) => BASE + `/prod/v1/${yyyy}/team_stats_last_five_games.json`;
const   PREVIEW_ARTICLE= (yyyymmdd, gameId) => BASE + `/prod/v1/${yyyymmdd}/${gameId}_preview_article.json`;
const   GAME_BOOK_PDF= (yyyymmdd, gameId) => BASE + `/prod/v1/${yyyymmdd}/${gameId}_Book.pdf`;
const   RECAP_ARTICLE= (yyyymmdd, gameId) => BASE + `/prod/v1/${yyyymmdd}/${gameId}_recap_article.json`;
const   BOXSCORE= (yyyymmdd, gameId) => BASE + `/prod/v1/${yyyymmdd}/${gameId}_boxscore.json`;
const   BOXSCORE_MINI= (yyyymmdd, gameId) => BASE + `/prod/v1/${yyyymmdd}/${gameId}_mini_boxscore.json`;
const   PLAYBYPLAY= (yyyymmdd, gameId, period) => BASE + `/prod/v1/${yyyymmdd}/${gameId}_pbp_$period.json`;
const   LEAD_TRACKER= (yyyymmdd, gameId, period) => BASE + `/prod/v1/${yyyymmdd}/${gameId}_lead_tracker_${period}.json`;
const   PLAYER_GAMELOG= (yyyy, personId) => BASE + `/prod/v1/${yyyy}/players/${personId}_gamelog.json`;
const   PLAYER_PROFILE= (yyyy, personId) => BASE + `/prod/v1/${yyyy}/players/${personId}_profile.json`;
const   PLAYER_UBER_STATS= (yyyy, personId) => BASE + `/prod/v1/${yyyy}/players/${personId}_uber_stats.json`;
const   TEAM_SCHEDULE_YEAR_BY_URL_CODE= (yyyy, teamUrlCode) => BASE + `/prod/v1/${yyyy}/teams/${teamUrlCode}/schedule.json`;
const   TEAMS_CONFIG= (yyyy) => BASE + `/prod/${yyyy}/teams_config.json`;
const   TEAM_ROSTER= (yyyy, teamUrlCode) => BASE + `/prod/v1/${yyyy}/teams/${teamUrlCode}/roster.json`;
const   TEAM_LEADERS_BY_URl_CODE= (yyyy, teamUrlCode) => BASE + `/prod/v1/${yyyy}/teams/${teamUrlCode}/leaders.json`;
const   TEAM_SCHEDULE_YEAR_BY_ID= (yyyy, teamId) => BASE + `/prod/v1/${yyyy}/teams/${teamId}/schedule.json`;
const   TEAM_LEADERS_BY_TEAM_ID= (yyyy, teamId) => BASE + `/prod/v1/${yyyy}/teams/${teamId}/leaders.json`;
const   TEAM_CALENDAR= (yyyy, teamId) => `/prod/v1/${yyyy}/teams/${teamId}/schedule.json`;
const   TEAM_CALENDAR_HOME_GAMES_ONLY= (yyyy, teamUrlCode) => `/prod/v1/${yyyy}/teams/${teamUrlCode}/home_games_calendar.ics`;
const   PLAYOFFS_BRACKET= (yyyy) => `/prod/v1/${yyyy}/playoffsBracket.json`;
const   PLAYOFFS_SERIES_LEADERS= (yyyy, seriesId) => `/prod/v1/${yyyy}/playoffs_${seriesId}_leaders.json`;


export {
        CALENDAR,
        SCOREBOARD,
        TEAMS,
        PLAYERS,
        ALLSTARS,
        COACHES,
        SCHEDULE,
        CONFERENCE_STANDINGS,
        DIVISION_STANDINGS,
        LEAGUE_STANDINGS,
        LEAGUE_STANDINGS_MINI,
        TEAMS_STATS_LEADERS,
        TEAMS_STATS_LAST_FIVE_GAMES,
        PREVIEW_ARTICLE,
        GAME_BOOK_PDF,
        RECAP_ARTICLE,
        BOXSCORE,
        BOXSCORE_MINI,
        PLAYBYPLAY,
        LEAD_TRACKER,
        PLAYER_GAMELOG,
        PLAYER_PROFILE,
        PLAYER_UBER_STATS,
        TEAM_SCHEDULE_YEAR_BY_URL_CODE,
        TEAMS_CONFIG,
        TEAM_ROSTER,
        TEAM_LEADERS_BY_URl_CODE,
        TEAM_SCHEDULE_YEAR_BY_ID,
        TEAM_LEADERS_BY_TEAM_ID,
        TEAM_CALENDAR,
        TEAM_CALENDAR_HOME_GAMES_ONLY,
        PLAYOFFS_BRACKET,
        PLAYOFFS_SERIES_LEADERS
    }