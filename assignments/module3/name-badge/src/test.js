const badgeElement = badgeInfo.map((badgeItem, index) => {
    return (
        <div className="badge-post-container">
            <p id="badge-title">Badge:</p>
            <p key={index}>Name: {badgeItem.firstName} {badgeItem.lastName}</p>
            <p key={index}>Phone: {badgeItem.phone}</p>
            <p key={index}>Place of Birth: {badgeItem.placeOfBirth}</p>
            <p key={index}>Favorite Food: {badgeItem.favoriteFood}</p>
            <p key={index}>Email: {badgeItem.email}</p>
            <p key={index}>{badgeItem.comments}</p>
        </div>
    )
})