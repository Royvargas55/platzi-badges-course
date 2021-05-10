import React from 'react'
import { Link } from 'react-router-dom';

// Components
import BadgesListItem from './BadgeListItem';
import SearchBar from './SearchBar';

// Custom hooks
function useSearchBadges(badgeList) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setfilteredBadges] = React.useState(badgeList);

    React.useMemo(() => {
        const result = badgeList.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
        });
        
        if(filteredBadges.length !== result.length) { 
            setfilteredBadges(result); 
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [badgeList, query]);

    return {query, setQuery, filteredBadges};
};

function BadgesList(props) {
    const badgeList = props.badges.slice(0).reverse();
    const { query, setQuery, filteredBadges } = useSearchBadges(badgeList);

    if (filteredBadges.length === 0) {
        return (
            <div>
                <SearchBar
                    value={query}
                    onChange={e => { setQuery(e.target.value) }}
                />
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
            </div>
        )
    }

    return (
        <div>
            <SearchBar
                value={query}
                onChange={e => { setQuery(e.target.value) }}
            />

            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BadgesList
