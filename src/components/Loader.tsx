
import React from 'react';
import { Loader } from 'lucide-react';

interface LoaderProps {
  size?: number;
  fullScreen?: boolean;
  text?: string;
}

const LoaderComponent: React.FC<LoaderProps> = ({ 
  size = 32, 
  fullScreen = false,
  text = 'Loading...'
}) => {
  const loader = (
    <div className="flex flex-col items-center justify-center gap-2">
      <Loader className="animate-spin text-primary" size={size} />
      {text && <p className="text-sm text-gray-500">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
        {loader}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-8">
      {loader}
    </div>
  );
};

export default LoaderComponent;
