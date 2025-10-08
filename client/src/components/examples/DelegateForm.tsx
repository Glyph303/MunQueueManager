import DelegateForm from '../DelegateForm';
import { COMMITTEES } from '@shared/committees';

export default function DelegateFormExample() {
  const unga = COMMITTEES.find(c => c.id === 'unga')!;
  
  return (
    <div className="max-w-md">
      <DelegateForm
        members={unga.members}
        memberLabel="Country"
        onSubmit={(data) => console.log('Submit:', data)}
      />
    </div>
  );
}
