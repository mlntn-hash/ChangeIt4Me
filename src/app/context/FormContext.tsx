"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

// Типи для даних форми
interface FormData {
  // Загальні дані
  images: File[];
  category: string | null;
  title: string;
  description: string;
  
  // Дані для автомобілів
  carData?: {
    make: string;
    model: string;
    year: string;
    transmission: string;
    engineType: string;
    engineSize: string;
    driveType: string;
    fuelEconomy: string;
    horsepower: string;
    bodyType: string;
    mileage: string;
    color: string;
    condition: string;
    doors: string;
    vin: string;
    ownershipHistory: string;
    accidentHistory: string;
    serviceHistory: string;
  };
  
  // Дані для нерухомості
  realEstateData?: {
    type: string;
    size: string;
    bedrooms: string;
    bathrooms: string;
    condition: string;
  };
  
  // Дані для маркетплейсу
  marketplaceData?: {
    type: string;
    brand: string;
    condition: string;
  };
  
  // Локація
  location: {
    country: string;
    state: string;
    city: string;
  };
  
  // Контактна інформація
  contact: {
    name: string;
    phone: string;
    email: string;
    preferredMethod: string;
  };
}

interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  resetFormData: () => void;
}

const initialFormData: FormData = {
  images: [],
  category: null,
  title: '',
  description: '',
  location: {
    country: '',
    state: '',
    city: ''
  },
  contact: {
    name: '',
    phone: '',
    email: '',
    preferredMethod: ''
  }
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const resetFormData = () => {
    setFormData(initialFormData);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormData must be used within a FormProvider');
  }
  return context;
}