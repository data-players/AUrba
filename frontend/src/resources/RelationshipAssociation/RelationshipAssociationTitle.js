import React from 'react';

const RelationshipAssociationTitle = ({ record }) => {
    return <span>{record ? record['pair:label'] : ''}</span>;
};

export default RelationshipAssociationTitle