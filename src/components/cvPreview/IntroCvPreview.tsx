import { useGlobalContext } from '../../context';

const IntroCvPreview = () => {
  const {
    personalInfo: { firstName, lastName, title },
  } = useGlobalContext();

  return (
    <header className="cv-header">
      <h1>
        {firstName} {lastName}
      </h1>
      <p className="personal-info-title">{title}</p>
    </header>
  );
};

export default IntroCvPreview;
