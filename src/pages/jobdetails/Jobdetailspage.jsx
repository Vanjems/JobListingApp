import React from 'react';
import { useParams } from 'react-router-dom';
import Jobdetails from '../../components/jobdetails/Jobdetails';
import Header from '../../components/header/Header';

export default function Jobdetailspage() {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <Jobdetails id={id} />
    </div>
  );
}
