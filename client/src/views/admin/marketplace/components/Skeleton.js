import React from "react";
import ContentLoader from "react-content-loader";

const CardSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={500}
        viewBox="0 0 400 500"
        backgroundColor="#c9c9c9"
        foregroundColor="#ebebeb"
        {...props}
    >
        <rect x="7" y="12" rx="20" ry="20" width="296" height="207" />
        <rect x="374" y="335" rx="0" ry="0" width="1" height="0" />
        <rect x="159" y="238" rx="15" ry="15" width="141" height="38" />
        <circle cx="32" cy="255" r="18" />
    </ContentLoader>
);

export default CardSkeleton;
