import { Breadcrumbs } from '@/components/breadcrumbs';
import { DosierForm } from '@/components/forms/dosier-form';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

const breadcrumbItems = [
  { title: 'Equipment Commissioning', link: '/ec' },
  { title: 'Dosiers', link: '/ec/dosier' },
  { title: 'Create', link: '/ec/dosier/create' }
];

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <DosierForm
          categories={[
            { _id: 'shirts', name: 'shirts' },
            { _id: 'pants', name: 'pants' }
          ]}
          initialData={null}
          key={null}
        />
      </div>
    </ScrollArea>
  );
}
