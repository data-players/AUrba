import React from 'react';

const OperationalModeTitle = ({ record }) => {
    return <span>{record ? record['pair:label'] : ''}</span>;
};

export default OperationalModeTitle
