import React from 'react';

const RelationshipAssociationKindTitle = ({ record }) => {
    return <span>{record ? record['pair:label'] : ''}</span>;
};

export default RelationshipAssociationKindTitle