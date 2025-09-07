import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, teamImageUrl} = teamData
  return (
    <li className="ipl-team-card">
      <Link to={`/team-matches/${id}`} className="ipl-team-link">
        <img src={teamImageUrl} alt={name} className="ipl-team-logo" />
        <p className="ipl-team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
