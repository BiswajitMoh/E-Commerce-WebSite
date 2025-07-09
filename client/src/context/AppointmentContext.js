import React, { createContext, useState, useEffect } from 'react';


 

export const AppointmentContext = createContext();


 

export const AppointmentProvider = ({ children }) => {

  const [appointments, setAppointments] = useState(() => {

    const saved = sessionStorage.getItem('appointments');

    return saved ? JSON.parse(saved) : [];

  });


 

  useEffect(() => {

    sessionStorage.setItem('appointments', JSON.stringify(appointments));

  }, [appointments]);


 

  const bookAppointment = (item) => {

    setAppointments((prev) => [...prev, item]);

  };

  // Example in AppointmentContext.js

const removeAppointment = (id) => {

  setAppointments(prev => prev.filter(item => item.id !== id));

};


 

  const clearAppointments = () => {

    setAppointments([]);

    sessionStorage.removeItem('appointments');

  };


 

  return (

    <AppointmentContext.Provider value={{ appointments, bookAppointment, clearAppointments,removeAppointment }}>

      {children}

    </AppointmentContext.Provider>

  );

};


 