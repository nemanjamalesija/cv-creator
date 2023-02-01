import React from 'react';
type experienceProps = {
  id: string;
  position: string;
  company: string;
  city: string;
  from: string;
  to: string;
};

const Experience = (props: experienceProps) => {
  const { id, position, company, city, from, to } = props;

  return (
    <div className="form-control">
      <input type="text" name="position" value={position} />
      <input type="text" name="company" value={company} />
      <input type="text" name="city" value={city} />
      <input type="text" name="from" value={from} />
      <input type="text" name="to" value={to} />
    </div>
  );
};

export default Experience;
