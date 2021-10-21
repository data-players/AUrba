import React from 'react';

const GroupTypeTitle = ({ record }) => {
    return <span>{record ? record['pair:label'] : ''}</span>;
};

export default GroupTypeTitle
