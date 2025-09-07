import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchData

  const getMatchStatusClassName = () =>
    matchStatus === 'Won' ? 'match-won' : 'match-lost'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${getMatchStatusClassName()}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
