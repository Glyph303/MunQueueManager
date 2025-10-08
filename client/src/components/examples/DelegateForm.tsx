import DelegateForm from '../DelegateForm';

export default function DelegateFormExample() {
  return (
    <div className="max-w-md">
      <DelegateForm
        onSubmit={(data) => console.log('Submit:', data)}
      />
    </div>
  );
}
