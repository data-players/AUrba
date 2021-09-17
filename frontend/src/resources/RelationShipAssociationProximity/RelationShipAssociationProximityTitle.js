import React from 'react';

const RelationShipAssociationProximityTitle = ({ record }) => {
    return <span>{record ? record['pair:label'] : ''}</span>;
};

export default RelationShipAssociationProximityTitle