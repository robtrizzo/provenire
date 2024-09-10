import React, { useState, useEffect, useMemo } from 'react';
import components from '@/components/ui/subsistence/crit/mapping';

interface SubsistenceCritProps {
  background: string;
  className?: string;
}

const SubsistenceCrit: React.FC<SubsistenceCritProps> = ({
  background,
  className,
}) => {
  const [dynamicComponent, setDynamicComponent] = useState<React.FC | null>(
    null
  );

  useEffect(() => {
    const loadComponent = async () => {
      const loadComponentFn =
        components[background.toLocaleLowerCase() as keyof typeof components];
      if (loadComponentFn) {
        try {
          const mod = await loadComponentFn();
          if (mod && mod.default) {
            setDynamicComponent(() => mod.default);
          } else {
            console.error('Loaded module does not have a default export:', mod);
            setDynamicComponent(null);
          }
        } catch (error) {
          console.error('Error loading component:', error);
          setDynamicComponent(null);
        }
      } else {
        console.error('Component not found for background:', background);
        setDynamicComponent(null);
      }
    };

    loadComponent();
  }, [background]);

  const renderCrit = useMemo(() => {
    const DynamicComponent = dynamicComponent;
    if (!DynamicComponent) return null;
    return <DynamicComponent />;
  }, [dynamicComponent]);

  return <div className={className}>{renderCrit}</div>;
};

export default SubsistenceCrit;
