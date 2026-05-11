import { Spinner } from '@heroui/react';
import React from 'react';

const LoadingPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-4">
      <Spinner color='warning' size='lg'/>
    </div>
        </div>
    );
};

export default LoadingPage;