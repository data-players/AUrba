import React from 'react';

const RelationshipAssociationProximityTitle = ({ record }) => {
    return <span>{record ? record['pair:label'] : ''}</span>;
};

export default RelationshipAssociationProximityTitle